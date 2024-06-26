import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import produtoRoutes from './src/routes/produtoRoutes.js'
import clienteRoutes from './src/routes/clienteRoutes.js'
import agendamentoRoutes from './src/routes/agendamentoRoutes.js'



dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use(produtoRoutes);
server.use(clienteRoutes);
server.use(agendamentoRoutes);


server.listen(process.env.PORT);