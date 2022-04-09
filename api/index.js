const express = require("express");
const app = express();
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://haidd109:Haidz2002@cluster0.n5fnn.mongodb.net/shop?retryWrites=true&w=majority"
).then(() => console.log("Ket noi DB thanh cong!"))
 .catch((err) => {
     console.log("err");
 })

app.listen(5000,  ()=> {
    console.log("Backend server is running!");
})