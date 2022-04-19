import { NextFunction, Request, Response } from "express"
import { Result, ValidationError, validationResult } from "express-validator"

export const validacion = (request: Request, response: Response, next: NextFunction) => {
    const errors: Result<ValidationError> = validationResult(request);
    if (!errors.isEmpty()) {
        return response.json({
            ok: false,
            errors: errors.array()
        });
    }
    next();
}