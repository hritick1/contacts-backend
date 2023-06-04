const User=require('../model/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const {registerValidation,loginValidation}=require('../auth/validation');
require('dotenv').config();

const register=async(req,res)=>{
    //validating the data 
  const {error}=registerValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

 //checking if the user exists
  const emailExist=await User.findOne({email:req.body.email});
if(emailExist) return res.status(400).send("Email already exists");

//hashing passwords
const salt =await bcrypt.genSalt(10);
const hashPassword=await bcrypt.hash(req.body.password,salt);

//creating a new user
const user=new User({
    name:req.body.name,
    email:req.body.email,
    password:hashPassword
});

try{
   await user.save();
   res.send("User Added with id: "+user._id);
}
catch(err){res.status(400).send(err);}


}

const login=async(req,res)=>{
    //login validation
    const {error}=loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //checking if email exists or not
    const foundUser=await User.findOne({email:req.body.email});
    if(!foundUser) return res.status(400).send("Email or Password Invalid");
      //checking if password matches 
    const validPassword=await bcrypt.compare(req.body.password,foundUser.password);
    if(!validPassword) return res.status(400).send("Invalid Email or Password");
    else { 

        const accessToken=jwt.sign({id:foundUser._id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'300s'});
        const refreshToken=jwt.sign({id:foundUser._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1d'});
        
        await User.findByIdAndUpdate(foundUser._id,{refreshToken:refreshToken});
        res.cookie('jwt',refreshToken,{httpOnly:true,sameSite:'none',secure:true,maxAge:24*60*60*1000});
        res.json({accessToken});
}



}
module.exports={register,login};