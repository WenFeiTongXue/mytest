const express=require("express");
// 创建连接池
const mysql=require("mysql")
var pool=mysql.createPool({
  host:"127.0.0.1",
  port:"3306",
  user:"root",
  password:"",
  database:"fun4",
  connectionLimit:20
})
// 创建路由器
var router=express.Router();

router.get("/reg",(req,res)=>{
  var obj=req.query;
    pool.query("INSERT INTO singer SET ?",[obj],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
			res.send({code:200,msg:"add suc"});
		}else{
			res.send({code:300,msg:"add fail"});
		}
  })
})
// 导出路由器

module.exports=router;