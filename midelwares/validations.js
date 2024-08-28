import { body } from "express-validator";

const recipesValidation = {
    create: [
        body("id")
        .notEmpty().withMessage("El campo ID es obligatorio al crear una receta")
        .isNumeric().withMessage("El campo ID debe ser númerico"),
        body("title").notEmpty().withMessage("El campo Titulo (title) es obligatorio al crear una receta")
        .isString().withMessage("El campo Titulo debe ser un String"),
        body("description")
        .notEmpty("El campo descripción (description) es obligatorio al crear una receta")
        .isString().withMessage("El campo Descripción debe ser un string"),
    ]
};

export default recipesValidation;
