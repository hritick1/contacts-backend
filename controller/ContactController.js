const Contacts=require('../model/Contact');


const addContact=async(req,res)=>{
    const contactExist=await Contacts.findOne({name:req.body.name});
    if(contactExist){
        res.send("Contact already Exists");
        return;
    }
   const contact=new Contacts({
    name:req.body.name,
    number:req.body.number
   });
   
   try{
    const saveData=await contact.save();
    res.send("Contact Added Successfully");
   }catch(err){
    res.status(400).send(err);
   }
}


const getAllContacts=async(req,res)=>{
    // console.log(req.cookies.myCookie);
    const contacts=await Contacts.find({});
    res.send(contacts);
};


const getContact=async(req,res)=>{
    const contacts=await Contacts.findOne({_id:req.params._id});
    console.log(contacts);
  res.send(contacts);
};


const updateContact=async(req,res)=>{
    const contacts=await Contacts.findByIdAndUpdate(req.params._id,{
        name:req.body.name,
        number:req.body.number
    });
     
};


const deleteContact=async(req,res)=>{
    const product=  await Contacts.findByIdAndDelete(req.params._id);
      res.send("Delete Success");
  };

module.exports={addContact,getAllContacts,getContact,updateContact,deleteContact};