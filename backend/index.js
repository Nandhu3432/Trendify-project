const port = 4000;
const express = require("express");
const app = express();
const mongos = require("mongoose");
const jwt = require("jsonwebtoken")
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const { connect } = require("http2");

app.use(express.json())
app.use(cors());

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://nandhunandhu5335:970434@cluster0.btpu36p.mongodb.net/")

//API Creation
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating Upload Endpoint for images
app.use('/images', express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
     success:1,   
     image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for creating products
const Product = mongoose.model("Product",{
  id:{
    type:Number,
    required:true,
  },
  name:{
      type:String,
      required:true,
  },
  image:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  new_price:{
     type:Number,
     required:true,
  },
  old_price:{
    type:Number,
    required:true,
  },
  date:{
    type:Date,
     default:Date.now,
   },
   available:{
    type:Boolean,
    default:true,
   },    
})

app.post('/addproduct', async (req, res) => {
  let products = await Product.find({});
  let id;

  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  const newProduct = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  console.log(newProduct);
  await newProduct.save();
  console.log("Product saved");

  res.json({
    success: true,
    name: req.body.name,
  });
});

// Creating API For deleting Products

app.post('/removeproduct',async (req,res)=>{
  await Product.findOneAndDelete({id:req.body.id});
  console.log("Removed");
  res.json({
    success:true,
    name:req.body.name
  })
})

//creating API for grtting all products
app.get('/allproduct', async (req, res) => {
  let products = await Product.find({});
  console.log("All Product Fetched");
  res.send(products);
});


app.listen(port,(error)=>{
  if (!error) {
    console.log("Server Running on port"+port)
  }
  else
  {
    console.log("Error : "+error)
  }
})
