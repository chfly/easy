/**
 * Created by chenwei on 2016/1/11.
 */
var mongoose=require('mongoose');
var schemas=require('./model');
var db=mongoose.connect('mongodb://localhost/easy');
for(var i=0;i<schemas.length;i++){
    for(var m in schemas[i]){
        mongoose.model(m,mongoose.Schema(schemas[i][m]))
    }
}
var _getDoc=function(doc){
    return mongoose.model(doc)
}
module.exports={
    getDoc:_getDoc
}

/**************************测试数据库****************************************/



//or条件和and结合    {$or:[{name:"chenwei"},{name:"root3"}]}
//大于小于等于  {"name":{$lt:50}} {"name":{$gt:50}}  {"name":{$lte:50}}  {"name":{$gte:50}}
//初始数据

/*

 //var ui={
 //  id:id,
 //  author:author,
 //  text:text
 //};


 */

//条件
//var conditions={name:"root1"};

//var UI=_getDoc('project');

/*************新增**************/
/*


 UI.create(doc,function(err){
 if(err){return console.error('新建失败',err);}
 console.log('新建成功');
 })


 */

/*************删除**************/

/*

 UI.remove(conditions,function(err){
 if(err){return console.error('删除失败');}
 console.log('删除成功');
 });

 */


/*************修改**************/
//修改成功 { ok: 1, nModified: 0, n: 0 } 没有查询到执行修改返回内容
//修改成功 { ok: 1, nModified: 1, n: 1 } multi:false只修改第一个
//修改成功 { ok: 1, nModified: 2, n: 2 } multi:ture修改多个
//upsert:true   没有查询到就新增一条记录

/*

 var updata={name:"chenwei3"};
 UI.update(conditions,updata,{upsert:false,multi:false},function(err,doc){
 if(err){return console.error('修改失败');}
 if(doc.n==0){return console.log('没有数据修改记录');}
 if(doc.n==1){console.log('成功修改一条记录',doc);}
 });

 */


/*************查询**************/
//var fields={_id:0,name:1,pwd:1};//0不获取，1获取值
//var options={skip:1,limit:5,sort:{pwd:1}}//name升序 跳过第一条记录 限制5调教了
////var options={skip:1,limit:2,sort:{pwd:-1}}//name降序
//UI.find(conditions,fields,options,function(err,data){
//    console.log(data);
//})