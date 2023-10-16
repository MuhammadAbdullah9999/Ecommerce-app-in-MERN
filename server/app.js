const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const cookieParser = require("cookie-parser");
const product=require('./Routes/Product')
const jwt = require('jsonwebtoken');
const Product =require('./model/product');

const app=express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const port=process.env.PORT || 5000;

app.use('/products',product);

app.get('/addToCart', async(req, res) => {

    // console.log(req.query);
    const productId=req.query.product;
    const product = await Product.findOne({ _id: productId }); // Use findOne() instead of find()

    // const token1=jwt.sign(product,"muhammad");
    // console.log(token1);
    const token = jwt.sign(productId, "muhammad");

    // res.cookie("product", productId, {
    //     expires: new Date(Date.now() + 3600000),
    //     httpOnly: false, // Ensures the cookie is accessible only via HTTP(S) requests
    //     secure: true, // Ensures the cookie is sent only over HTTPS in production
    //   }).send("cookie set");
    res.send('ok');
  });

  
app.get('/getCookie',(req,res)=>{
    const cookies=req.cookies;
    console.log(cookies);
    if(cookies){
        res.send(cookies);
    }
    else{
        res.send("no cookies");
    }
   
})
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});