import express from "express";
import bodyParser from "body-parser";
// import Product from './models/Product.js';
import User from './models/User.js';
import cors from "cors";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json());

const port = 5000;

app.use(cors({credentials : true , origin : "http://localhost:5173"}));
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://style-curve-4wnucb9sp-sakeths-projects-dbd1767a.vercel.app",
    "https://style-curve-git-master-sakeths-projects-dbd1767a.vercel.app/",
    "style-curve.vercel.app",
  ],
  credentials: true, // You may need to set this if you're using cookies or sessions
};

// app.use(cors(corsOptions));

app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:5173",
    "https://style-curve-4wnucb9sp-sakeths-projects-dbd1767a.vercel.app",
    "https://style-curve-git-master-sakeths-projects-dbd1767a.vercel.app/men",
    "https://style-curve.vercel.app",

    // Add more origins as needed
  ];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// mongo compass start

// mongoose.connect("mongodb://localhost:27017/StyleCurve").then(() => {
//     console.log("connected to database");
// }).catch((e) => {
//     console.log(e);
// })

// mongo compass end

//mongo atlas  start

const url =
  "mongodb+srv://sakethayinavolu:9tK3wy8L4XPrdP7z@cluster0.or4zlgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);
let Product;

async function run() {
  await client.connect();
  const database = client.db("StyleCurveDB");
  const ProductCollection = database.collection("Product");
  Product = ProductCollection;
  console.log("succesfully connected to the database");
}
// mongo atlas end ...

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
    const mens = await Product.find({ gender: "male" }).toArray();
    res.json(mens);
  } catch (error) {
    console.error("Error fetching men's products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/Register", (req, res) => {
  const { username, password } = req.body;

  const newUser = new User({
    username,
    password,
  });

  newUser.save();
  console.log(newUser);
});

app.post("/login", (req, res) => {});

app.get("/getTees", async (req, res) => {
  res.json(await Product.find({ type: "t-shirt" }));
});

app.listen(port, async () => {
  //mongo atlas
  run();
  console.log("listening on port " + port);
});
