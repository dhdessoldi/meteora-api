import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  thumbnail: { type: String }
}, { versionKey: false });

const categoria = mongoose.model("categorias", categoriaSchema);

export { categoria, categoriaSchema };