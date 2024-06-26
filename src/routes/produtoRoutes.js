import { Router } from "express";
import { addproduto,findAllproduto,getprodutoById,update,delproduto} from "../controllers/produtoController.js";

const router = Router();

router.post('/produto', addproduto);
router.get('/produto', findAllproduto);

router.get('/produto/:id', getprodutoById);
router.put('/produto/:id', update);
router.delete('/produto/:id', delproduto);


export default router;