const User=require('../model/User');

const handleLogout=async(req,res)=>{
   //onclient also delete the access token
   
   const cookies=req.cookies;
   if(!cookies?.jwt) return res.sendStatus(204);//no-content
   const refreshToken=cookies.jwt;

   const foundUser=await User.findOne({refreshToken:refreshToken});
   if(!foundUser) {
    res.clearCookie('jwt',{httpOnly:true,sameSite:'none',secure:true});
    return res.status(204).send("Success");}

 
       await User.findByIdAndUpdate(foundUser._id,{refreshToken:''});
       res.clearCookie('jwt',{httpOnly:true,sameSite:'none',secure:true});
       res.status(204).send("Success");


}
module.exports={handleLogout};