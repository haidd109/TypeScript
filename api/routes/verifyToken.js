const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token;
    if (authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
            if(err) res.status(403).json("Token không có giá trị!");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("Bạn không phải hàng auth!")
    }
}

const verifyTokenAndAuthorization = (req, res, next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("Bạn không có quyền truy cập!")
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization };