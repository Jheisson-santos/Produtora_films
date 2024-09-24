import User from "../models/usuario.js"

const store = async (req,res)=>{
    try{
    const connect = await User.create(req.body)
    res.status(201).json(connect)
    }catch(err){
        console.log(err);
    }
}

const singup = async (req,res)=>{
    try{
        const content = await User.create({
            email: req.body.email,
            senha: req.body.senha
        })
        res.status(201).json(content)
    }catch(err){
        res.status(401).json(err)
    }
}

// const login = async (req,res)=>{
//     try{
//         const user = await User.findOne({
//             email: req.body.email
//         })
//         if(!user){
//             res.sendStatus(404)
//         }
        

//         res.status(201).json(user)
//     }catch(err){
//         res.status(401).json(err)
//     }
// }

const index = async (req,res)=>{
    try{
        const connect = await User.find()
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const show = async (req,res)=>{
    try{
        const connect = await User.findById(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const update = async (req,res)=>{
    try{
        const connect = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const destroy = async (req,res)=>{
    try{
        const connect = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

export default {store, index, show, update, destroy, singup}