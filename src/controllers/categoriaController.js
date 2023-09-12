import { categoria } from "../models/Categoria.js";

class CategoriaController {
  static async getCategorias(req, res) {
    try {
      const getCategorias = await categoria.find({});
      res.status(200).json(getCategorias);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao buscar Categorias.` })
    }
  }

  static async getCategoriaById(req, res) {
    try {
      const id = req.params.id;
      const getCategoria = await categoria.findById(id);
      res.status(200).json(getCategoria);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao buscar Categoria.` })
    }
  }

  static async createCategoria(req, res) {
    try {
      const newCategoria = await categoria.create(req.body)
      res.status(201).json({ message: "Criado com sucesso", categoria: newCategoria });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao cadastrar Categoria.` })
    }
  }

  static async updateCategoria(req, res) {
    try {
      const id = req.params.id;
      await categoria.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Categoria atualizado" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao atualizar Categoria.` })
    }
  }
  static async deleteCategoria(req, res) {
    try {
      const id = req.params.id;
      await categoria.findByIdAndDelete(id);
      res.status(200).json({ message: "Categoria deletado" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao deletar Categoria.` })
    }
  }
};

export default CategoriaController;