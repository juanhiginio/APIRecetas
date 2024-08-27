// Importamos modulo de express
import express from "express";

import routes from "./routes/routes.js";

const app = express();

app.use(express.json());

app.use(routes);


app.get("*", (req, res) => res.status(404).json("Not found"));

app.listen(3000, () => {
    console.log("El servidor esta en escucha en el puerto 3000");
});