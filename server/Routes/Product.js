const Product=require('../model/product');
const express=require('express');

const router=express.Router();

router.get('/',async(req,res) => {
    const Category=req.query.Category;
    if(Category){
        const products = await Product.find({category:Category});
        res.send(products);
    }
    else{
        const products = await Product.find();
        res.send(products);
    }
});

router.get('/productInfo',async(req,res) => {
    const id = req.query.id;
    const productInfo = await Product.findOne({ _id: id }); // Use findOne() instead of find()
    
    if (!productInfo) {
        return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(productInfo);
});
module.exports=router;