#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS fun4;
#创建数据库，设置存储的编码
CREATE DATABASE fun4 CHARSET=UTF8;
#进入该数据库
USE fun4;
create table singer(
  `Farea` int(11),
  `Fattribute_3` int(11),
  `Fattribute_4` int(11),
  `Fgenre` int(11),
  `Findex` varchar(32),
  `Fother_name` varchar(32),
  `Fsinger_id` int(11),
  `Fsinger_mid` varchar(32),
  `Fsinger_name` varchar(32),
  `Fsinger_tag` varchar(32),
  `Fsort` int(11),
  `Ftrend` int(11),
  `Ftype` int(11),
  `voc` int(11)
);