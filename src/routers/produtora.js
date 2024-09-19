import express from "express"
import produtora from "../controllers/produtora.js"
import cep from "../middlewares/cep.js"
const router = express.Router()

router.get('/', produtora.index)
router.get('/:id', produtora.show)
router.post('/', cep, produtora.store)
router.put('/:id', produtora.update)
router.delete('/:id', produtora.destroy)

export default router