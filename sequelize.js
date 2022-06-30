const {Sequelize}=require("sequelize")
const Dbconnect=(database,username,password,host)=>{
    const sequelize=new Sequelize(database,username,password,{
        host:host,
        dialect:'mysql'
    });
    return sequelize;
}
module.exports=Dbconnect;