import express from "express"
import usuario from "../controllers/usuario.js"

const router = express.Router()

router.get('/', usuario.index)
router.get('/:id', usuario.show)
router.post('/', usuario.store)
router.put('/:id', usuario.update)
router.delete('/:id', usuario.destroy)
// router.post("/login", usuario.login)
router.post("/singup", usuario.singup)
export default router