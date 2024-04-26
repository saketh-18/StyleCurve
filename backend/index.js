import express from "express";
import bodyParser from "body-parser";
import Product from './models/Product.js';
import User from './models/User.js'; 
import cors from "cors";
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import verifyToken from "./verifyToken.js";

const app = express();

app.use(cookieParser())
app.use(bodyParser.json());
app.use(express.static('public'));

const port = 5000;

// app.use(cors({credentials : true , origin : "http://localhost:5174"}));
// const corsOptions = {
//   origin: [
//     "localhost:5174",
//     "0.0.0.0/0" ,
//     "localhost:5173" ,
//     "https://style-curve-4wnucb9sp-sakeths-projects-dbd1767a.vercel.app",
//     "https://style-curve-git-master-sakeths-projects-dbd1767a.vercel.app/",
//     "style-curve.vercel.app",
//   ],
//   credentials: true, // You may need to set this if you're using cookies or sessions
// };

// // app.use(cors(corsOptions));

// app.use((req, res, next) => {
//   const allowedOrigins = [
//     "localhost:5174",
//     "0.0.0.0/0" ,
//     "localhost:5173" ,
//     "https://style-curve-4wnucb9sp-sakeths-projects-dbd1767a.vercel.app",
//     "https://style-curve-git-master-sakeths-projects-dbd1767a.vercel.app/men",
//     "https://style-curve.vercel.app",

//     // Add more origins as needed
//   ];

//   const origin = req.headers.origin;

//   if (allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   }

//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

// Set up CORS middleware
const allowedOrigins = [
  "http://localhost:5174",
  "http://localhost:5173",
  "https://style-curve-4wnucb9sp-sakeths-projects-dbd1767a.vercel.app",
  "https://style-curve-git-master-sakeths-projects-dbd1767a.vercel.app",
  "https://style-curve.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));

// mongo compass start

// mongoose.connect("mongodb://localhost:27017/StyleCurve").then(() => {
//     console.log("connected to database");
// }).catch((e) => {
//     console.log(e);
// })

// mongo compass end

//mongo atlas  start

// const url =
//   "mongodb+srv://sakethayinavolu:9tK3wy8L4XPrdP7z@cluster0.or4zlgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(url);
// // let Product;
// // let Users;

// async function run() {
//   await client.connect();
//   const database = client.db("StyleCurveDB");
//   // const ProductCollection = database.collection("Product");
//   // const UsersCollection = database.collection("Users");
//   // Product = ProductCollection;
//   // Users = UsersCollection;
//   console.log("succesfully connected to the database");
// }
// mongo atlas end ...

mongoose.connect("mongodb+srv://sakethayinavolu:9tK3wy8L4XPrdP7z@cluster0.or4zlgp.mongodb.net/StyleCurveDB?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("Error connecting to MongoDB Atlas:", err));

app.post("/postProduct", async (req, res) => {
  const { title, price, rating, image, type, gender } = req.body;

  const newProduct = new Product({
    title,
    price,
    rating,
    image,
    type,
    gender,
  });

  if (await newProduct.save()) {
    res.json({ msg: "succesfully injected data" });
  }
  console.log(newProduct);
});

app.get("/getMens", async (req, res) => {
  try {
    const mens = await Product.find({ gender: "male" });
    res.json(mens);
  } catch (error) {
    console.error("Error fetching men's products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/register", async (req, res) => {
  const { username, password , fname , lname } = req.body;

  const newUser = new User({
    fname ,
    lname ,
    username,
    password,
  });

 if(await newUser.save()){
  console.log("succesfull registered");
  res.sendStatus(200);
  console.log(newUser);
 }
 else {
  console.log("error registering user");
 }
  
});

app.post("/login", async (req, res) => {
  const {username , password} = req.body;
  console.log(username , password);
    
    const currentUser = await User.findOne({username : username});
    console.log("currentUser" , currentUser);
    //comparing the passwords:
    try {
        if(currentUser) {
                if(currentUser.password === password) {
                    console.log("succesfully logged in");
                    //generating a json web token
                    const user = {username : username , id : currentUser._id}
                    jwt.sign(user , "SECRET" , (err , token) => {
                        if (err) throw err;
                        res.cookie('token' , token ).json({msg : "succccccesfully logged in"});
                    })
                }
                else {
                    console.log("wrong password");
                    res.sendStatus(400);
                } 
        }
        else {
            console.log("user does'nt exist try regitering");
        }
    }
    catch(er) {
        console.log(er);
    }
});

app.get("/getTees", async (req, res) => {
  res.json(await Product.find({ type: "t-shirt" }));
});

app.get("/profile" , verifyToken , (req , res) => {
  res.json(req.user);
})

app.listen(port, async () => {
  //mongo atlas
  console.log("listening on port " + port);
});
