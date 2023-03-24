const express =require('express');
const router= express.Router();
const User = require('../models/User');
//@route   POST api/users
//@desc    Register a user
//@access  Publicdsdsdsd

router.post('/' , (req , res)=>{res.send(req.body)});

module.exports= router;
