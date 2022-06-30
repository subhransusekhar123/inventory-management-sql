const express=require("express")
const router=express.Router()

const {postdata,getdata,updatedata,deletedata}=require("../controller/mysql")
router.post("/post",postdata)
router.get("/get",getdata)
router.put("/update/:id",updatedata)
router.delete("/delete/:id",deletedata)
module.exports=router;