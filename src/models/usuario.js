import db from "../db.js"
import bcrypt from "bcrypt"
const Schema = db.Schema

const usuarioSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        minlength: 8
    },
    tipo: {
        type: String,
        enum: ["admin", "user"],
        required: true,
        default: "user",

    }
})

usuarioSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash
    next()
})
const User = db.model("User", usuarioSchema)
export default User

