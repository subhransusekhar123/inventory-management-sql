const express=require("express");
const router=require("./router/router")
const {postdata,getdata,updatedata,deletedata}=require("./controller/mysql")
const app =express()
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/api",router)


module.exports=app;