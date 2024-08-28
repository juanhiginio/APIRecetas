import { body } from "express-validator";

const recipesValidation = {
    create: [
        body("id")
        .notEmpty().withMessage("El campo ID es obligatorio al crear una receta")
        .isNumeric().withMessage("El campo ID debe ser númerico"),
        body("title")
        .notEmpty().withMessage("El campo Titulo (title) es obligatorio al crear una receta")
        .isString().withMessage("El campo Titulo debe ser un String"),
        body("description")
        .notEmpty().withMessage("El campo Descripción (description) es obligatorio al crear una nueva receta")
        .isString().withMessage("El campo Descripción debe ser un string"),
    ],
    edit: [
        body("title")
        .notEmpty().withMessage("El campo Titulo (title) es obligatorio al crear una receta")
        .isString().withMessage("El campo Titulo debe ser un String"),
        body("description")
        .notEmpty().withMessage("El campo Descripción (description) es obligatorio al crear una nueva receta")
        .isString().withMessage("El campo Descripción debe ser un string"),
    ]
};

export default recipesValidation;
