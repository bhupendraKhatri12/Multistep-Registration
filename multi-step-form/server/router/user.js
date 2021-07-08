const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/register', async (req, res) => {
 const { user_email, user_password } = req.body;
 console.log('req.body', req.body);




 //checking if there is any user with the provided email address.
 let user = await User.findOne({ user_email });
 if (user) {
     //if such a user exists, then we're returning an error back to the client (which is our React app).
   return res.status(400).send('User with the provided email already exist.');
 }

 try {
   user = new User(req.body);
   user.user_password = await bcrypt.hash(user_password, 8);

   await user.save();
   res.status(201).send();
 } catch (e) {
   res.status(500).send('Something went wrong. Try again later.');
 }
});

module.exports = router;