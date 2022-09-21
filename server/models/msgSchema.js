const mongoose = require('mongoose');

// User Schema or Document Structure

const msgSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true,
        unique : true
    },
    message : {
        type : String,
        required : true
    }
})

// Create Model
const Message = new mongoose.model("MESSAGE", msgSchema);
module.exports = Message;
