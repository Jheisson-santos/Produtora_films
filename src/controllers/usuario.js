import User from "../models/usuario.js"
import jwt from "../services/jwt.js"
const store = async (req,res)=>{
    try{
    const connect = await User.create(req.body)
    res.status(201).json(connect)
    }catch(err){
        console.log(err);
    }
}

const singup = async (req,res)=>{
    try {
        const user = await User.create({
          email: req.body.email,
          password: req.body.password,
        });
    
        const token = jwt.generateAccessToken({
          tipo: user.tipo,
          email: user.email,
          _id: user._id,
        });
        res.status(201).json({
          token,
        });
    
      } catch (error) {
        console.log(error)
        res.status(400).send(error);
      }
}

const login = async (req,res)=>{
    try {
        const user = await User.findOne({
          email: req.body.email,
        }).exec();
        if (user && (await user.senhaCorreta(req.body.password))) {
          const token = jwt.generateAccessToken({
            tipo: user.tipo,
            email: user.email,
            _id: user._id,
          });
          res.json({
            token,
          });
        } else {
    
          res.status(404).json("Email ou senha inválidos");
        }
    
      } catch (error) {
        console.log(error)
        res.status(400).send(error);
      }
}

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

export default {store, index, show, update, destroy, login, singup}