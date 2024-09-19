import db from "../db.js";

const Schema = db.Schema;

const filmeSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    produtora: {
        type: Schema.Types.ObjectId,
        ref: "Produtora",
        required: true
        
    }
})

const Filme = db.model("Filme", filmeSchema);
export default Filme