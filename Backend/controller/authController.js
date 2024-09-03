const User = require("../model/User");

const check = async(req,res)=>{
    console.log("okk done,HEY BAADI");
    res.status(200).json({message:"okk done...HEY BAADI"})
    
}

const register = async(req,res)=>{
    const {name,email,password} = req.body;

    try{
            const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({msg:"User already exists"});
        }else{
            const user = new User({name,email,password});
            await user.save();
            res.json(user);
        }
    }catch(err){
        res.status(500).json({err:err,message:"Server Error"})
    }
}

const login = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:"Invalid Credentials"});
        }
        res.status(200).json({message:"Login Successfull...",user:user});
    }catch(err){
        res.status(500).json({message:"Server Error"})
    }
}

module.exports = {
    check,
    register,
    login
}