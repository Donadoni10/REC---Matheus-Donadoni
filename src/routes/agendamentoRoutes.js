import { Router } from "express";
import { addagendamento,findAllagendamento,update,delagendamento, getAgendamentoByDate } from "../controllers/agendamentoController.js";

const router = Router();

router.post('/agendamento',addagendamento );
router.get('/agendamento', findAllagendamento);

router.get('/agendamento/:id', getAgendamentoByDate);
router.put('/agendamento/:id', update);
router.delete('/agendamento/:id', delagendamento);


export default router;