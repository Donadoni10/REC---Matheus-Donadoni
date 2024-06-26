import { createProduto, deleteproduto, findproduto, findprodutoById, updateproduto } from "../models/produto.js";

export const addproduto = async (req, res) => {
    try {
        const { nome, descricao, preco, quantidade,categoria,fornecedor } = req.body;
        const pst = await createProduto(nome, descricao, preco, quantidade,categoria,fornecedor);
        res.status(201).json({ pst });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to add produto", message: error.message });
    }
};

export const findAllproduto = async (req, res) => {
    try {
        const produto = await findproduto();
        res.status(200).json({ produto });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to find produto", message: error.message });
    }
};

export const getprodutoById = async (req, res) => {
    try {
        const post = await findprodutoById(req.params.id);
        res.status(200).json({ produto });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to find produto by id", message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params.id;
        const produtoData = req.body;
        const produto = await updateproduto(id, produtoData);
        res.status(200).json({ produto });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to update produto", message: error.message });
    }
};

export const delproduto = async (req, res) => {
    try {
        const { id } = req.params.id;
        const post = await deleteproduto(id);
        res.status(200).json({ Produto });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to delete produto", message: error.message });
    }
};
