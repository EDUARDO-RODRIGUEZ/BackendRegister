import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import Usuario from "../model/usuario";

export default {
    async create(request: Request, response: Response) {
        const { name, email, password } = request.body;
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);
        let result = null;
        try {
            result = await Usuario.create({ name: name, email: email, password: hash });
        } catch (error) {
            console.log("controller_create : " + error);
            return response.status(500).json({
                'ok': false,
                'message': "Error en el Server",
                'error': error
            });
        }
        response.status(201).json({
            'ok': true,
            'message': 'El usuario se registro correctamente!!!',
            'data': result
        });
    },
    async getAll(request: Request, response: Response) {
        let result = null;
        try {
            result = await Usuario.findAll();
        } catch (error) {
            console.log("controller_getAll : " + error);
            return response.status(500).json({
                'ok': false,
                'message': "Error en el Server",
                'error': error
            });
        }
        response.status(200).json({
            'ok': true,
            'message': 'Los usuarios se cargaron correctamente',
            'data': result
        });
    }
}