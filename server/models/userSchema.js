const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

// User Schema or Document Structure

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]
})

// Hashing Password to Secure

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = bcryptjs.hashSync(this.password,10);
    }
    next();
})

// Generate Token to Verify user 
userSchema.methods.generateToken = async function(){
    try{
        let generateToken = jwt.sign({id : this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : generateToken});
        await this.save();
        return generateToken;
    }catch (error){
        console.log(error);
    }
}

// Create Model
const Users = new mongoose.model("USER", userSchema);
module.exports = Users;