const Product = require("../model/Product");
const { verifyTokenAndAuthorization, verifyToken, verifyTokenAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAdmin, async (req, res)=>{
    const newProduct = new Product(req.body)

    try{
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct);
    }catch(err){
        res.status(500).json(err);
    }
})

//UPDATE 
router.put("/:id", verifyTokenAdmin, async (req, res) =>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{new: true});
        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE
router.delete(":/id", verifyTokenAdmin, async ( req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product đã được xóa.. ")
    }catch{
        res.status(500).json(err)
    }
})

//GET PRODUCT
router.get("/find/:id", verifyTokenAdmin, async ( req, res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch{
        res.status(500).json(err)
    }
})

//GET ALL USER
router.get("/", verifyTokenAdmin, async ( req, res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
        let products;

        if(qNew){
            products = await Product.find().sort({createAt: -1 }).limit(5)
        } else if(qCategory){
            products = await Product.find({categories:{
                $in:[qCategory],
            },
        });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    }catch{
        res.status(500).json(err)
    }
})


module.exports = router;