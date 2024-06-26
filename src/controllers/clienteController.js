import { createcliente, findclientes, findclienteByEmail,updatecliente,deletecliente } from "../models/cliente.js";

export const addcliente = async (req, res) => {
    try {
        const { nome, telefone,email,endereco,cidade,estado } = req.body;
        const cliente = await createcliente(nome, telefone,email,endereco,cidade,estado);
        res.status(201).json({ cliente });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to add cliente", message: error.message });
    }
};

export const findAllcliente = async (req, res) => {
    try {
        const cliente = await findclientes();
        res.status(200).json({ cliente });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to find clientes", message: error.message });
    }
};


export const getclienteByEmail = async (req, res) => {
    try {
        const cliente = await findclienteByEmail(req.params.email);
        res.status(200).json({ cliente });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to find cliente by email", message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { email } = req.params.email;
        const clienteData = req.body;
        const cliente = await updatecliente(email, clienteData);
        res.status(200).json({ cliente });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to update cliente", message: error.message });
    }
};

export const delcliente= async (req, res) => {
    try {
        const { email } = req.params.email;
        const cliente = await deletecliente(email);
        res.status(200).json({ cliente });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to delete cliente", message: error.message });
    }
};
