var express = require('express');
var router = express.Router();
var fs=require('fs');
var React=require('react');
var ReactDOMServer=require('react-dom/server');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EASY' });
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


/**************************************react******************************************/
router.get('/react', function(req, res, next) {
    //res.render('react');
    var App=require('../src/react/build/server/react');
    var Comment=db.getDoc('comment');
    var fields={_id:0,__v:0};
    Comment.find({},fields,{},function(err,docs){
        if(err){
            console.error('error',err);
            res.json({flag:500});
        }
        else{
            var reactHtml=ReactDOMServer.renderToString(React.createElement(App, {data: docs}));
            var html='<!DOCTYPE html>' +
                '<html>' +
                '<head>' +
                '<meta charset="utf-8">' +
                '<title>React</title>' +
                '<meta name="viewport" content="width=device-width,initial-scale=1">' +
                '</head>' +
                '<body>' +
                '<div id="react">' +
                reactHtml+
                '</div>' +
                '<script src="http://localhost:8080/js/react.js"></script>' +
                '</body>' +
                '</html>' ;
            console.log(html);
            res.send(html);
        }
    })

    //var reactHtml=require('../src/react/build/server/react')();
    //res.render('react', {reactHtml:reactHtml});

});
/**************************************angular******************************************/
router.get('/angular', function(req, res, next) {
    res.render('angular');
});












































/**************************************over******************************************/
module.exports = router;
