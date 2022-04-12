const Cart = require("../model/Cart");
const { verifyTokenAndAuthorization, verifyToken, verifyTokenAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (req, res)=>{
    const newCart = new Cart(req.body)

    try{
        const saveCart = await newCart.save();
        res.status(200).json(saveCart);
    }catch(err){
        res.status(500).json(err);
    }
})

//UPDATE 
router.put("/:id", verifyTokenAndAuthorization, async (req, res) =>{
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{new: true});
        res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE
router.delete(":/id", verifyTokenAndAuthorization, async ( req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart đã được xóa.. ")
    }catch{
        res.status(500).json(err)
    }
})

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async ( req, res)=>{
    try{
        const cart = await Cart.find({userId: req.params.userId });
        res.status(200).json(cart);
    }catch{
        res.status(500).json(err)
    }
})

//GET ALL 
router.get("/", verifyTokenAdmin, async (req, res)=>{
    try{
        const carts = await Cart.find()
        res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;