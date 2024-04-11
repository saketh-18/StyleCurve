import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import Product from './models/Product.js';
import User from './models/User.js';
import cors from "cors";

const app = express();

app.use(bodyParser.json());

const port = 5000;

app.use(cors({credentials : true , origin : "http://localhost:5173"}));

mongoose.connect("mongodb://localhost:27017/StyleCurve").then(() => {
    console.log("connected to database");
}).catch((e) => {
    console.log(e);
})

app.post('/postProduct' , async (req , res) => {
    const {title , price , rating , image , type , gender} = req.body;

    const newProduct = new Product({
        title , price , rating , image , type , gender
    })

    if(await newProduct.save()) {
        res.json({msg:"succesfully injected data"});
    }
    console.log(newProduct);

})

app.get("/getMens" , async (req , res) => {
    res.json(await Product.find({gender:"male"}));
})

app.post("/Register" , (req , res) => {
    const {username , password} = req.body;

    const newUser = new User({
        username , password
    });

    newUser.save();
    console.log(newUser);
})

app.post("/login" , (req , res) => {
    
})

app.get("/getTees" , async (req , res) => {
    res.json(await Product.find({type : "t-shirt"}));
})

app.listen(port , () => {
    console.log("listening on port " + port);
})
