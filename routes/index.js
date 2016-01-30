var express = require('express');
var router = express.Router();
var React=require('react');
var ReactDOMServer=require('react-dom/server');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});

/**************************************APP获取评论数据******************************************/
router.get('/app', function(req, res, next) {
    var App=require('../src/build/server/app');
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
            //console.log(reactHTML);
            var html='<!doctype html>' +
                '<html>' +
                '<head>' +
                '<meta charset="utf-8">' +
                '<title>后台</title>' +
                '<meta name="viewport" content="width=device-width,initial-scale=1">' +
                '<link rel="shortcut icon" href="http://localhost:8080/easy.ico">' +
                '<link rel="stylesheet" href="http://localhost:8080/css/app.css" >' +
                '</head><body><div id="example">'
                +reactHTML+
                '</div><script src="http://localhost:8080/js/app.js"></script>'+
                '</body></html>';
            res.send(html);
        }
    })

});
/**************************************获取data数据******************************************/
router.get('/data', function(req, res, next) {
    var Comment=db.getDoc('data');
    var fields={__v:0};
    Comment.find({},fields,{},function(err,docs){
        if(err){
            console.error('error',err);
            res.json({flag:500});
        }
        else{

        }
    });
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
