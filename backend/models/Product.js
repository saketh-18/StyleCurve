import mongoose from "mongoose";

const {Schema , model} = mongoose;

const ProductSchema = new Schema({
    title : String ,
    price : Number ,
    rating : Number,
    image : String ,
    type : String ,
    gender : String
}
)

const Product = model('Product' , ProductSchema);
export default Product;
