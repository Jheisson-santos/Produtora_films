import db from "../db.js";

const Schema = db.Schema;

const produtoraSchema = new Schema({
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
    }
})

const Produtora = db.model("Produtora", produtoraSchema);
export default Produtora