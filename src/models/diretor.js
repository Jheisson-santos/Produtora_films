import db from "../db.js";

const Schema = db.Schema;

const diretorSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: Object,
        required: true
    },
    telefone: {
        type: [Number],
        required: true
    },
    filme:{
        type: [Schema.Types.ObjectId],
        ref: "Filme",
    }
})

const Diretor = db.model("Diretor", diretorSchema);
export default Diretor