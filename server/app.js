// import All dependencies

const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParse = require('cookie-parser');

const app = express();

// Configure ENV file & Require Connection File
dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

// Require Model
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');

// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParse());

app.get('/', (req, res)=>{
    res.send("hello world");
});

// Registration
app.post('/register', async (req, res)=>{
    try {
        //Get Body or data
        const username = req.body.username;
        const email = req.body.email;
        const phone = req.body.phone;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email,
            phone:phone,
            password : password
        });

        //Save Method is Used to Create User or Insert User
        // But Before Saving or Inserting, Password will Hash
        // Because of Hashing. After Hash, It will save to DB
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

    }catch(error) {
        res.status(400).send(error);
    }
});

// Login User
app.post('/login', async (req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        //find User if User are Exists
        const user = await Users.findOne({email : email});
        if(user){
            //Verify Password
            const isMatch = await bcryptjs.compare(password,user.password);

            if(isMatch){
                //Generate Token Which is Define in user Schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    // Expries Token in 24 hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly :true
                })
                res.status(200).send("LoggedIn");
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

// Message
app.post('/message', async (req, res)=>{
    try {
        //Get Body or data
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const address = req.body.address;
        const message = req.body.message;

        const sendMsg = new Message({
            name : name,
            email : email,
            phone : phone,
            address : address,
            message : message
        });

        //Save Method is Used to Create User or Insert User
        // But Before Saving or Inserting, Password will Hash
        // Because of Hashing. After Hash, It will save to DB
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Message Sent");

    }catch(error) {
        res.status(400).send(error);
    }
});

// Logout Page
app.get('/logout', (req,res)=>{
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("user Logged Out")
})

// Authentication
app.get('/auth', authenticate, (req, res) => {
    
})

// Run Server
app.listen(port, ()=>{
    console.log("Server is running.....")
});