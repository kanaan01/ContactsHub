const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const {check , validationResult} = require('express-validator');

const User = require('../models/User');
const contact = require('../models/Contact');
const Contact = require("../models/Contact");
//@route   POST  api/contacts
//@desc    Add new contacts
//@access  private

router.post("/", (req, res) => {
  res.send("Add contact");
});

//@route   GET  api/contacts
//@desc    Get all users contacts(yours)
//@access  private

router.get("/", auth , async (req, res) => {

   try {
      const contacts = await Contact.find({user: req.user.id}).sort({date:-1});
      res.json(contacts);
   } catch (err) {
    console.error(err.message);
    res.status(400).send('Server Error');
    
   }
 
});

//@route   PUT  api/contacts/:id
//@desc    Update contact
//@access  private

router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route   DELETE  api/contacts/:id
//@desc    Delete contact
//@access  private

router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
