var mongoose=require('mongoose');
var db=mongoose.connect('mongodb://localhost/easy');

/***********************************fade 数据操作********************************************/
var fadeData=[]
var Fade=db.getDoc('fake');
var conditions={};
var fields={_id:0,__v:0};//0不获取，1获取值
var options={};
//var options={skip:1,limit:5,sort:{pwd:1}}//name升序 跳过第一条记录 限制5调教了
//var options={skip:1,limit:2,sort:{pwd:-1}}//name降序
Fade.find(conditions,fields,options,function(err,data){
  if(err){return console.error('Fade数据库查询失败');}
    fadeData=data;
  console.log(data);
});
var Fadeui={
      "id": 0,
      "name": "Mayer Leonard",
      "city": "Kapowsin",
      "state": "Hawaii",
      "country": "United Kingdom",
      "company": "Ovolo",
      "favoriteNumber": 7
    };
//
//Fade.create(Fadeui,function(err){
//  if(err){return console.error('Fade新建失败',err);}
//  console.log('Fade新建成功');
//})

/***********************************column 数据操作********************************************/
var columnData=[];
var Column=db.getDoc('columnMeta');
var conditions={};
var fields={_id:0,__v:0};//0不获取，1获取值
var options={};
//var options={skip:1,limit:5,sort:{pwd:1}}//name升序 跳过第一条记录 限制5调教了
//var options={skip:1,limit:2,sort:{pwd:-1}}//name降序
Column.find(conditions,fields,options,function(err,data){
  if(err){return console.error('Column数据库查询失败');}
  columnData=data;
  console.log(data);
});
var Columnui={
  "columnName": "id",
  "order": 1,
  "locked": false,
  "visible": true
};
//
//Column.create(Columnui,function(err){
//  if(err){return console.error('Column新建失败',err);}
//  console.log('Column新建成功');
//})
//


/***********************************导出数据操作********************************************/
module.exports={
  fadeData:fadeData,
  columnMeta:columnData
}