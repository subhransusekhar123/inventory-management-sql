require("dotenv").config();
const express=require("express");
const app =require("./app")
app.use(express.json());
const port=process.env.PORT||8000;



app.listen(port,()=>{
    console.log(`connected..${port}`)
})