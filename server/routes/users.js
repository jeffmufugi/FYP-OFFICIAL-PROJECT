const express = require("express");
const router = express.Router();
const User = require("../models/user") 
//above line Imports the Mongoose model for the “signup” collection. 
//This model will be used to interact with the MongoDB collection (fetching and creating user documents).


//all users
router.get('/', async(req, res) => {
    try{
        const users = await User.find(); 
        //above line Uses the Mongoose model newUser to query the MongoDB collection and retrieve all user documents (newUser.find()).
        res.json(users)
        //res.json(users): Sends the retrieved users as a JSON response to the client.
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

//user login creds
router.post('/login', (req, res) => {
    res.send("user login credentials");
})



router.route("/:id")
.get(getUser,(req,res)=>{
        res.json(res.user);
})
.put(getUser,(req,res)=>{
    res.json(res.user)
})

.delete(getUser, async (req, res) => {
    try {
      await res.user.deleteOne();
      res.status(200).json({ message: "Deleted user" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


router.get("/",(req,res)=>{
    console.log(req.query);
    const {query:{key,value},}=req;
    if(!key && !value){} return res.send(user);
})

async function getUser(req,res,next){
    let user

    try{
        user = await User.findById(req.params.id)
        if(user == null){
           return res.status(404).json("cannot find user")
        }
    }
    catch(err){
        return res.status(500).json({message: err.message});
        
    }
    res.user = user;
    next()
}



module.exports = router



//const user = await user.save(): This line saves the newly created user document to the MongoDB database.
//	•	newuser.save(): Mongoose’s save() method inserts the new document into the database.
//	•	await: The await keyword ensures the function waits for the save operation to complete before proceeding. This avoids callback hell and allows using try-catch for error handling.
//	•	res.status(201).send(newUser): If the user is successfully saved, the server sends a status code of 201 (Created) and the newly saved user in the response.
//	•	201: The status code 201 indicates that a resource (user) has been successfully created.
//	•	send(): Sends the newly created user document as the response.
