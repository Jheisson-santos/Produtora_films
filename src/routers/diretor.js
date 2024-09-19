import express from "express"
import diretor from "../controllers/diretor.js"
import cep from "../middlewares/cep.js"
const router = express.Router()

router.get('/', diretor.index)
router.get('/:id', diretor.show)
router.post('/', cep, diretor.store)
router.put('/:id', diretor.update)
router.delete('/:id', diretor.destroy)

export default router