import { prisma } from "../../config/prisma.js";

export const createProduto= async (nome, descricao, preco, quantidade,categoria,fornecedor) => {
    try {
        return await prisma.pRODUTO.create({
            data: {
                nome,
                descricao,
                preco,
                quantidade,
                categoria,
                fornecedor,
            },
        });
    } catch (error) {
        throw new Error(`Failed to create produto: ${error.message}`);
    }
};

export const findproduto = async () => {
    try {
        return await prisma.pRODUTO.findMany();
    } catch (error) {
        throw new Error(`Failed to get all produto: ${error.message}`);
    }

}

export const findprodutoById = async (id) => {
    return await prisma.pRODUTO.findUnique({
        where: {
            id,
        },
    });
};

export const updateproduto = async (nome, descricao, preco, quantidade,categoria,fornecedor) => {
    return await prisma.pRODUTO.update({
        where: {
            id: id
        },
        data: {
            nome: nome,
            descricao: descricao,
            preco: preco,
            quantidade: quantidade,
            categoria: categoria,
            fornecedor: fornecedor,

        },
    });
};

export const deleteproduto = async (id) => {
    return await prisma.pRODUTO.delete({
        where: {
            id,
        },
    });
};
