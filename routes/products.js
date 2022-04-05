require('../app');

const express = require('express');
const router = express.Router();

const Product = require('../models/product');

router.get('/all', async(req, res)=>{
    try {
        const products = await Product.find({});

        return res.status(200).send(products);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "500 | Internal Server Error"
        })
    }
})


router.post('/add-new', async(req, res)=>{
    try {
        const name = req.body.name;
        const category = req.body.category;
        const price = req.body.price;

        let prod = new Product({
            name,
            category,
            price
        })

        await prod.save();

        return res.status(200).json({
            status: 200,
            message: "new product added"
        })
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "500 | Internal Server Error"
        })
    }
})







module.exports = router;