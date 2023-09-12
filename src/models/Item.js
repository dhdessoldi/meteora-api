import mongoose from "mongoose";
import { categoriaSchema } from "./Categoria.js";

const itemSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: mongoose.Schema.Types.String, required: true },
  preco: { type: Number, required: true },
  categoria: { type: String, required: true },
}, { versionKey: false });

const item = mongoose.model("itens", itemSchema);

export default item;
