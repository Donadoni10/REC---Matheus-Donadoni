import { prisma } from "../../config/prisma.js";

export const createcliente = async (nome, telefone,email,endereco,cidade,estado) => {
    try {
        return await prisma.cLIENTE.create({
            data: {
                nome,
                telefone,
                email,
                endereco,
                cidade,
                estado,
            },
        });
    } catch (error) {
        if (error.code == 'P2002') {
            throw new Error("E-mail adress already exists.");
        }

        throw new Error(`Failed to create cliente: ${error.message}`);
    }
};

export const findclientes = async () => {
    try {
        return await prisma.cLIENTE.findMany();
    } catch (error) {
        throw new Error(`Failed to get all clientes: ${error.message}`);
    }

}

export const findclienteByEmail = async (email) => {
    return await prisma.cLIENTE.findUnique({
        where: {
            email,
        },
    });
};

export const updatecliente = async (email, clienteData) => {
    return await prisma.cLIENTE.update({
        where: {
            email: email
        },
        data: {
            nome: clienteData.oame,
        },
    });
};

export const deletecliente = async (email) => {
    return await prisma.cLIENTE.delete({
        where: {
            email,
        },
    });
};
