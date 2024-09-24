import express from "express";
import Produtora from "./routers/produtora.js"; 
import Diretor from "./routers/diretor.js";
import Filme from "./routers/filme.js"
import User from "./routers/usuario.js";
const port = 3000
const app = express();

app.use(express.json());
app.use("/produtora", Produtora)
app.use("/diretor", Diretor)
app.use("/filme", Filme)
app.use("/user", User)


app.listen(port, ()=>{
    console.log(`Rodando na porta ${port}`)
})