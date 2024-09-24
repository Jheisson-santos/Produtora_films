import express from "express"
import usuario from "../controllers/usuario.js"
import token from "../middlewares/token.js";
import role from "../middlewares/roles.js"

const router = express.Router()

router.get('/', token , role(["admin", "user"]) , usuario.index)
router.get('/:id',token, usuario.show)
router.post('/', token, role(["admin"]),usuario.store)
router.put('/:id', token,usuario.update)
router.delete('/:id',token, usuario.destroy)
router.post("/login", token,usuario.login)
router.post("/singup", token, usuario.singup)
export default router