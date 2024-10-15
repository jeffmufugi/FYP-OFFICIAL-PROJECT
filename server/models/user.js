const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: true,
    },
    lastname : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    phoneNo : {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    registrationDate: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("user",userSchema)