import axios from "axios";

const cep = (req,res,next)=>{
    if(req.body.cep != undefined && req.body.cep.length == 8){
        axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
        .then((response)=>{
            req.body.endereco = response.data
            delete req.body.cep
            next()
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export default cep