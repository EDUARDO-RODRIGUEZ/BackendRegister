import express from 'express';
import { check } from 'express-validator';
import usuarioController from '../controller/usuario';
import { uniqueEmail } from '../middleware/customValidation';
import { validacion } from '../middleware/validation';
const router = express.Router();
/* 
    prefix: user
*/
router.post('/create', [
    check('name').isLength({ min: 3 }).withMessage('el campo name debe tener al menos 3 caracteres'),
    check('email').isEmail().withMessage('el campo de email debe ser de tipo email').custom(uniqueEmail),
    check('password').isLength({ min: 8 }).withMessage('el campo password debe tener al menos 8 caracteres'),
    validacion
], usuarioController.create);

router.get('/',usuarioController.getAll);

export default router;


