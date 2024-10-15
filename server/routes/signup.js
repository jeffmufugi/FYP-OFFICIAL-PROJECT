const express = require("express");
const router = express.Router();
const newUser = require("../models/user")


// router.get('/', async(req, res) => {
//     try{
//         const users = await newUser.find();
//         res.json(users)
//     }
//     catch(err){
//         res.status(500).json({message: err.message})
//     }
// })



router.post('/', async (req, res) => {

    const newuser = new newUser({
        firstname  : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        phoneNo : req.body.phoneNo,
        region: req.body.region,
        password : req.body.password,
        registrationDate : req.body.registrationDate
    });

    try{
        const newUser = await newuser.save()
        res.status(201).send(newUser)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
})



module.exports = router