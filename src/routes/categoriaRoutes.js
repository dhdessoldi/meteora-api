import express from "express";
import CategoriaController from "../controllers/categoriaController.js";

const routes = express.Router();

routes.get("/categorias", CategoriaController.getCategorias)
routes.get("/categorias/:id", CategoriaController.getCategoriaById)
routes.post("/categorias", CategoriaController.createCategoria)
routes.put("/categorias/:id", CategoriaController.updateCategoria)
routes.delete("/categorias/:id", CategoriaController.deleteCategoria)

export default routes;