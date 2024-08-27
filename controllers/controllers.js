import recipes from "../recipes.js"

// CRUD Recetas

// Retornar todas las recetas
function obtenerTodasLasRecetas(req, res) {
    return res.json(recipes);
};

// Crear una nueva receta
function crearReceta(req, res) {

    const nuevaReceta = {
        id: ,
        title: ,
        description: ,
        preparation.ingredients: ,
        preparation.coocking: ,
        preparation.total: ,
        instructions: ,
        ingredients: ,
        nutritionalValues.calories: ,
        nutritionalValues.carbohydrates: ,
        nutritionalValues.protein: ,
        nutritionalValues.fat: ,

    };

};


export default {
    obtenerTodasLasRecetas: obtenerTodasLasRecetas,
};