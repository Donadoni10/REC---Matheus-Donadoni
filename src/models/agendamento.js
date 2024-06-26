import { prisma } from "../../config/prisma.js";

export const createagendamento = async (cliente_id,data_agendamento, hora_agendamento,servico) => {
    try {
        return await prisma.aGENDAMENTO.create({
            data: {
                cliente_id,
                data_agendamento,
                hora_agendamento,
                servico,
            },
        });
    } catch (error) {
        if (error.code == 'P2002') {
            throw new Error("E-mail adress already exists.");
        }

        throw new Error(`Failed to create agendamento: ${error.message}`);
    }
};

export const find = async () => {
    try {
        return await prisma.aGENDAMENTO.findMany();
    } catch (error) {
        throw new Error(`Failed to get all agendamento: ${error.message}`);
    }

}

export const findagendamentoBydate = async (data_agendamento) => {
    return await prisma.aGENDAMENTO.findMany({
        where: {
            data_agendamento,
        },
    });
};

export const updateagendamento = async (cliente_id, agendamentoData) => {
    return await prisma.aGENDAMENTO.update({
        where: {
            cliente_id: cliente_id
        },
        data: {
            data_agendamento: agendamentoData.data_agendamento,
            hora_agendamento: agendamentoData.hora_agendamento,
        },
    });
};

export const deleteagendamento = async (cliente_id) => {
    return await prisma.aGENDAMENTO.delete({
        where: {
            cliente_id,
        },
    });
};
