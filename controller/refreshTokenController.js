const User=require('../model/User');

const jwt=require('jsonwebtoken');
require('dotenv').config();



const handleRefreshToken=async(req,res)=>{
   
   const cookies=req.cookies;
   if(!cookies?.jwt) return res.sendStatus(401);
   const refreshToken=cookies.jwt;

   const foundUser=await User.findOne({refreshToken:refreshToken});
   if(!foundUser) return res.status(400).send("Invalid User");

   jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,decoded)=>{
           
    if(err || foundUser._id!=decoded.id) return res.sendStatus(403);
    const accessToken=jwt.sign({id:decoded.id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'300s'});
    res.json({accessToken});
   });

       



}
module.exports={handleRefreshToken};