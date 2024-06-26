import { createagendamento, find,  updateagendamento, findagendamentoBydate } from "../models/agendamento.js";

export const addagendamento = async (req, res) => {
    try {
        const { id, date,hora,service } = req.body;
        const agendamento = await createagendamento(id ,date, hora, service);
        res.status(201).json({ agendamento });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to add agendamento", message: error.message });
    }
};

export const findAllagendamento = async (req, res) => {
    try {
        const agendamento = await find();
        res.status(200).json({ agendamento });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to add agendamento", message: error.message });
    }
};

export const getAgendamentoByDate = async (req, res) => {
    try {
        const agendamento = await findagendamentoBydate(req.params.data_agendamento);
        res.status(200).json({ agendamento });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to find agendamento by email", message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { cliente_id } = req.params.cliente_id;
        const agendamentoData = req.body;
        const agendamento = await updateagendamento(cliente_id, agendamentoData);
        res.status(200).json({ agendamento });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to update agendamento", message: error.message });
    }
};

export const delagendamento= async (req, res) => {
    try {
        const { email } = req.params.email;
        const Cliente = await deleteagendamento(email);
        res.status(200).json({ Agendamento });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to delete agendamento", message: error.message });
    }
};
