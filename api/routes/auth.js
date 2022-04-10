const router = require("express").Router();
const User = require("../model/User")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
            ).toString(),
    });

    try{
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch{
        res.status(500).json(err);
    }

});

//Login

router.post("/login", async (req,res) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("User khonh chinh xac")

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
            );
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        Originalpassword !== req.body.password &&
         res.status(401).json("Password khong chinh xac")
        
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC,
            {expiresIn:"1d"})

        const { password, ...other } = user._doc;

        res.status(200).json({...other, accessToken});
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;