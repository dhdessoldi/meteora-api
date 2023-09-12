import express from "express";
import ItemController from "../controllers/itemController.js";

const routes = express.Router();

routes.get("/itens", ItemController.getItens)
routes.get('/itens/busca', ItemController.getItemByCategoria)
routes.get("/itens/:id", ItemController.getItemById)
routes.post("/itens", ItemController.createItens)
routes.put("/itens/:id", ItemController.updateItem)
routes.delete("/itens/:id", ItemController.deleteItem)

export default routes;