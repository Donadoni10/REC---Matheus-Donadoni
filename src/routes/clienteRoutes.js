import { Router } from "express";
import { addcliente,findAllcliente,getclienteByEmail,update,delcliente } from "../controllers/clienteController.js";

const router = Router();

router.post('/cliente', addcliente);
router.get('/cliente',findAllcliente );

router.get('/cliente/:email', getclienteByEmail);
router.put('/cliente/:email', update);
router.delete('/users/:email', delcliente);

export default router;