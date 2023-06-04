const router=require('express').Router();
const ContactController=require('../controller/ContactController');
const verifyToken=require('../middleware/verifyToken');

router.route('/contacts')
          .post(verifyToken,ContactController.addContact)
          .get(verifyToken,ContactController.getAllContacts);

router.route('/contacts/:_id')
             .get(ContactController.getContact)
             .put(ContactController.updateContact)
             .delete(ContactController.deleteContact);

module.exports=router;