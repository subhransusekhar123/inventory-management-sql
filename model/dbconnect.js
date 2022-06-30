const{DataTypes}=require("sequelize")
const Dbconnect=require("../sequelize")
let product;
const sequelize=Dbconnect("product","root","1234","localhost");
const asyncConnect=async()=>{
    try {await sequelize.authenticate();
        console.log("connected to my sql")
    } catch (error) {
        console.error("unable to conect my sql",error) 
    }
}
asyncConnect()

product=sequelize.define('product',{
    name:{
        type:DataTypes.STRING,
    },
    quantity:{
        type:DataTypes.NUMBER
    },
    price:{
        type:DataTypes.NUMBER
    },
    image:{
        type:DataTypes.STRING
    },
    supplier:{
        type:DataTypes.STRING
    }

})
module.exports=product;