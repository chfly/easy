var express = require('express');
var router = express.Router();

var React=require('react');
var ReactDOMServer=require('react-dom/server');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});
/**************************************comment获取评论数据******************************************/
router.get('/comment', function(req, res, next) {
    var App=require('../src/build/server/comment');
    var Comment=db.getDoc('comment');
    var fields={_id:0,__v:0};
    Comment.find({},fields,{},function(err,docs){
        if(err){
            console.error('error',err);
            res.json({flag:500});
        }
        else{
            var commentListData=docs;
            //console.log(docs);
            var reactHTML=ReactDOMServer.renderToString(React.createElement(App, {data: commentListData}));
            console.log(reactHTML);
            res.render('comment', {reactOutput: reactHTML});
        }
    })

});
/**************************************获取data数据******************************************/
router.get('/data', function(req, res, next) {
    var reactHTML=require('../src/build/server/data')();
    //console.log(reactHTML);
    res.render('data', {reactOutput: reactHTML});

});

/**************************************提交评论数据******************************************/
router.post('/commitComment', function(req, res, next) {
  var ui=req.body;
  var Comment=db.getDoc('comment');
  Comment.create(ui,function(err){
    if(err){res.json({flag:500,content:'error'});console.error('create commit error',err);return;}
    console.log('create commit ok');
    res.json({flag:200,content:'ok'});
  })
});

/**************************************获取评论数据******************************************/
router.get('/getComments', function(req, res, next) {
    var Comment=db.getDoc('comment');
    var fields={_id:0,__v:0};
    Comment.find({},fields,{},function(err,docs){
        if(err){
            console.error('error',err);
            res.json({flag:500});
        }
        else{
            res.json({flag:200,content:docs});
        }
    })
});
/********************************************************************************/


module.exports = router;
