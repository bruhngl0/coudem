const UserModel = require('../models/userModel')

const signup = async(req,res)=>{
    const {name, email, password} = req.body
    const userExists = await UserModel.findOne({email})

    if(userExists){
        res.status(200).json({message: "user already exist"})
    }else{
        const user = await UserModel.create({
            name,
            email,
            password
        })  

        if(user){
            res.status(200).json({message: "user created"})
        }
    }
}


const signin = async(req,res)=>{
   const {email, password} = req.body
   const validation = await UserModel.findOne({email})
   if(validation){
    res.json({
        email,
        password
    })
   }else{
    res.status(400).json({message: "user not registered"})
   }
}

module.exports = {
    signup,
    signin
}