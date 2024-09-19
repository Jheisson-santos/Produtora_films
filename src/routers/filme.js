import express from "express"
import filme from "../controllers/filme.js"
const router = express.Router()

router.get('/', filme.index)
router.get('/:id', filme.show)
router.post('/', filme.store)
router.put('/:id', filme.update)
router.delete('/:id', filme.destroy)

export default router