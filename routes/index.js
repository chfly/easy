var express = require('express');
var router = express.Router();
var fs=require('fs');
var React=require('react');
var ReactDOMServer=require('react-dom/server');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});
/**************************************reflux******************************************/
router.get('/reflux', function(req, res, next) {
    //var React=require('react');
    //var ReactDOMServer=require('react-dom/server');
    //var App=require('../src/build/server/reflux');
    //var Comment=db.getDoc('comment');
    //var fields={_id:0,__v:0};
    //Comment.find({},fields,{},function(err,docs){
    //    if(err){
    //        console.error('error',err);res.json({flag:500});
    //    }
    //    else{
    //        var commentListData=docs;
    //        var reactHTML=ReactDOMServer.renderToString(React.createElement(App, {data:commentListData}));
    //        //console.log(reactHTML);
    //        res.render('reflux', {reactOutput: reactHTML});
    //    }
    //})
    var reactHTML=require('../src/build/server/reflux')();
    console.log(reactHTML);
    res.render('reflux', {reactOutput: reactHTML});
});
/**************************************Router******************************************/
router.get('/router', function(req, res, next) {
    res.render('react-router', { title: 'express' });
});
/**************************************app******************************************/
router.get('/app', function(req, res, next) {
    res.render('app');
});


/**************************************isomorphic******************************************/
router.get('/isomorphic', function(req, res, next) {
    var Comment=db.getDoc('comment');
    var fields={_id:0,__v:0};
    Comment.find({},fields,{},function(err,docs){
        if(err){
            console.error('error',err);
            res.json({flag:500});
        }
        else{
            var App=React.createClass({displayName: "App",
                render:function(){
                    var rows=this.props.datas.map(function(data){
                        return (
                            React.createElement("li", {key: data.id}, data.text)
                        )
                    });
                    return (
                        React.createElement("ul", null, rows)
                    )
                }
            });
            var reactHTML=ReactDOMServer.renderToString(React.createElement(App, {datas: docs}));
            var html='<!DOCTYPE html>' +
                '<html>' +
                '<head>' +
                '<meta charset="utf-8">' +
                '<title>React Isomorphic</title>' +
                '<meta name="viewport" content="width=device-width,initial-scale=1">' +
                '</head>' +
                '<body>' +
                '<div id="react-main-mount">' +
                reactHTML+
                '</div>' +
                '<script src="http://localhost:8080/js/isomorphic.js"></script>' +
                '</body>' +
                '</html>' ;
            console.log(reactHTML);
            res.send(html);












        }
    })
});


/**************************************comment获取评论数据******************************************/
router.get('/comment', function(req, res, next) {
    var React=require('react');
    var ReactDOMServer=require('react-dom/server');
    var App=require('../src/build/server/comment');
    var Comment=db.getDoc('comment');
    var fields={_id:0,__v:0};
    Comment.find({},fields,{},function(err,docs){
        if(err){
            console.error('error',err);res.json({flag:500});
        }
        else{
            var commentListData=docs;
            console.log(docs);
            var reactHTML=ReactDOMServer.renderToString(React.createElement(App, {data:commentListData}));
            console.log(reactHTML);
            //res.render('comment', {reactOutput: reactHTML});
            var html='<!DOCTYPE html>' +
                '<html>' +
                '<head>' +
                '<meta charset="utf-8">' +
                '  <title>reflux</title>' +
                ' <meta name="viewport" content="width=device-width,initial-scale=1">' +
                '<!--<link rel="shortcut icon" href="http://localhost:8080/easy.ico">-->' +
                ' <!--<link href="http://localhost:8080/css/app.css" rel="stylesheet">-->' +
                '</head>' +
                '<body>' +
                '<div id="react-main-mount">' +
                reactHTML+
                '</div>' +
                '<script src="http://localhost:8080/js/comment.js"></script>' +
                '</body>' +
                '</html>';
            //console.log(html)

            res.send(html)


        }
    })
});
//router.get('/comment', function(req, res, next) {
//    var reactHTML=require('../src/build/server/comment')();
//    console.log(reactHTML);
//    res.render('comment', {reactOutput: reactHTML});
//
//});
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

/**************************************写文件数据******************************************/
router.get('/write', function(req, res, next) {
    var Comment=db.getDoc('comment');
    var fields={_id:0,__v:0};
    var getComments=function(){
        Comment.find({},fields,{},function(err,docs){
            if(err){
                console.error('error',err);
            }
            else{
                //var inputData="module.exports =["+docs+']';
                var inputData="["+docs+']';
                console.log(inputData)
                fs.writeFile('d:/easy/src/data/comment.js',inputData,function(error){
                    if(error){return console.log('comment file write false',error)}
                    console.log("数据写入成功！");
                    console.log("--------我是分割线-------------")
                })
                res.send('ok')
            }
        })
    }
    getComments();
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
