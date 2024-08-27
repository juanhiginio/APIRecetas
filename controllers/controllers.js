import recipes from "../recipes.js"

// CRUD Recetas

// Retornar todas las recetas
function obtenerTodasLasRecetas(req, res) {
    return res.json(recipes);
};

// Crear una nueva receta
function crearReceta(req, res) {

    console.log(req);

    const nuevaReceta = {
        id: Number(req.body.id),
        title: req.body.title,
        description: req.body.description,
        preparation: {
            ingredients: req.body.preparation.ingredients,
            cooking: req.body.preparation.cooking,
            total: req.body.preparation.total,
        },
        instructions: req.body.instructions,
        ingredients: req.body.ingredients,
        nutritionalValues: {
            calories: Number(req.body.nutritionalValues.calories),
            carbohydrates: req.body.nutritionalValues.carbohydrates,
            protein: req.body.nutritionalValues.protein,
            fat: req.body.nutritionalValues.fat,
        }
    };

    recipes.push(nuevaReceta);

    return res.json({
        message: "Se ha creado una nueva receta"
    });

};

// Actualizar / Editar una receta
function editarReceta(req, res) {

    const recetaID = Number(req.params.id);

    recipes.map((receta) => {
        if (receta.id === recetaID) {
            receta.title = req.body.title || receta.title;
            receta.description = req.body.description || receta.description;
            receta.preparation = {
                ingredients: req.body.preparation.ingredients || receta.preparation.ingredients,
                cooking: req.body.preparation.cooking || receta.preparation.cooking,
                total: req.body.preparation.total || receta.preparation.total,
            },
            receta.instructions = req.body.instructions || receta.instructions,
            receta.ingredients = req.body.ingredients || receta.ingredients,
            receta.nutritionalValues = {
                calories: Number(req.body.nutritionalValues.calories) || receta.nutritionalValues.calories,
                carbohydrates: req.body.nutritionalValues.carbohydrates || receta.nutritionalValues.carbohydrates,
                protein: req.body.nutritionalValues.protein || receta.nutritionalValues.protein,
                fat: req.body.nutritionalValues.fat || receta.nutritionalValues.fat,
        }
        return res.json({
            message: `Se han editado los datos de la receta con el id: ${receta.id}`
        });
        }
    });

    return res.json({
        message: "No se ha encontrado la receta con el id indicado"
    });

};

// Eliminar una receta
function eliminarReceta(req, res) {

    const recetaID = Number(req.params.id);

    const recipesNuevo = recipes.filter((receta) => {
        return receta.id !== recetaID;
    });

    return res.json({
        message: `Se ha eliminado la receta con el id ${req.params.id}`,
        recipesNuevo
    });

};

// Buscar una receta
function buscarReceta(req, res) {

    const recetaID = Number(req.params.id);

    const recetaBuscada = recipes.filter((receta) => {
        return receta.id === recetaID;
    });

    return res.json({
        message: `La receta correspondinete al ID ${req.params.id} es: `,
        recetaBuscada
    });

}


export default {
    obtenerTodasLasRecetas: obtenerTodasLasRecetas,
    crearReceta: crearReceta,
    editarReceta: editarReceta,
    eliminarReceta: eliminarReceta,
    buscarReceta: buscarReceta
};
