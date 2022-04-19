import { CustomValidator } from "express-validator";
import Usuario from "../model/usuario";

export const uniqueEmail: CustomValidator = (value) => {

    if (value === undefined) return Promise.reject('el email no es valido');

    return Usuario.findOne({ where: { email: value } }).then((user) => {
        if (user) return Promise.reject('el email ya se encuentra registrado');
    });

}