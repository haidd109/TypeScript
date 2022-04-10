const router = require("express").Router();

router.get("/usertest", (req,res)=>{
    res.send("user test thanh cong!");
})

router.post("/userposttest", (req,res)=>{
    const username = req.body.username;
    res.send("username cua ban la: " + username);
})

module.exports = router;