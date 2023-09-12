import item from "../models/Item.js";

class ItemController {
  static async getItens(req, res) {
    try {
      const getItens = await item.find({});
      res.status(200).json(getItens);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao buscar itens.` })
    }
  }

  static async getItemById(req, res) {
    try {
      const id = req.params.id;
      const getItem = await item.findById(id);
      res.status(200).json(getItem);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao buscar item.` })
    }
  }

  static async createItens(req, res) {
    try {
      const newItem = await item.create(req.body)
      res.status(201).json({ message: "Criado com sucesso", item: newItem });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao cadastrar item.` })
    }
  }

  static async updateItem(req, res) {
    try {
      const id = req.params.id;
      await item.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Item atualizado" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao atualizar item.` })
    }
  }
  static async deleteItem(req, res) {
    try {
      const id = req.params.id;
      await item.findByIdAndDelete(id);
      res.status(200).json({ message: "Item deletado" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao deletar item.` })
    }
  }
};

export default ItemController;