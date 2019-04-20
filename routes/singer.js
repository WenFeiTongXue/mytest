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

router.get("/",(req,res)=>{
  // console.log(obj)
    pool.query("select * from singer ORDER BY Fsort ASC limit 0,50 ",(err,result)=>{
      console.log(result)
    if(err) throw err;
    if(result.length>0){
			res.send({code:200,msg:result});
		}else{
			res.send({code:300,msg:"not Found"});
		}
  })
})
// 导出路由器

module.exports=router;