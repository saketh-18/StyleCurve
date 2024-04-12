import express from 'express';
import bodyParser from "body-parser";
// import Product from './models/Product.js';
// import User from './models/User.js';
import cors from "cors";
import { MongoClient } from 'mongodb';

const app = express();

app.use(bodyParser.json());

const port = 5000;

app.use(cors({credentials : true , origin : "http://localhost:5173"}));

// mongoose.connect("mongodb://localhost:27017/StyleCurve").then(() => {
//     console.log("connected to database");
// }).catch((e) => {
//     console.log(e);
// })

const url = "mongodb+srv://sakethayinavolu:9tK3wy8L4XPrdP7z@cluster0.or4zlgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);
let Product;

async function run(){
    await client.connect();
    const database = client.db("StyleCurveDB");
    const ProductCollection = database.collection("Product");
    Product = ProductCollection;
    console.log("succesfully connected to the database");
}




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

app.get("/getMens", async (req, res) => {
    try {
        const mens = await Product.find({ gender: "male" }).toArray();
        res.json(mens);
    } catch (error) {
        console.error("Error fetching men's products:", error);
        res.status(500).json({ error: "Internal server error" });
    }
 });
 

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

app.listen(port , async () => {
    await run();
    console.log("listening on port " + port);
})
