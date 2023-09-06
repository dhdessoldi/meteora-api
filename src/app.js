import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Banco de dados da Meteora")
});

export default app;