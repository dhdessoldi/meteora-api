import express from "express";
import itens from "./itemRoutes.js"
import categorias from "./categoriaRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send("Banco de dados da Meteora"));
  app.use(express.json(), itens, categorias);
};

export default routes;