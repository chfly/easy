var express = require('express');
var router = express.Router();
var React=require('react');
var ReactDOMServer=require('react-dom/server');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});
router.get('/admin', function(req, res, next) {
    var data=[
        {id:'1',user:'tom','sex':'man'},
        {id:'2',user:'tom1','sex':'man'},
        {id:'3',user:'tom2','sex':'man'},
        {id:'4',user:'tom3','sex':'man'},
        {id:'5',user:'tom4','sex':'man'}
    ];
    var Table=require('../src/admin/build/table/Table');
    var App=React.createClass({displayName: "App",
        render: function(){
            return(
                React.createElement("div", null,
                    React.createElement(Table, {datas: this.props.data})
                )
            )
        }
    });
    var reactHTML=ReactDOMServer.renderToString(React.createElement(App, {data: data}));
    console.log(reactHTML);
    var html='<!doctype html>' +
          '<html>' +
          '<head>' +
          '<meta charset="utf-8">' +
          '<meta name="viewport" content="width=device-width,initial-scale=1">' +
          '<link rel="shortcut icon" href="/easy.ico">' +
          '<link href="http://localhost:8080/admin/build/css/app.css" rel="stylesheet">' +
          '<title>admin</title>' +
          '</head><body><div id="example">'
          +reactHTML+
          '</div><script src="http://localhost:8080/admin/build/js/app.js"></script>'+
          '</body></html>';


    res.send(html);
});
router.get('/app', function(req, res, next) {
  res.render('app', { title: 'EASY' });
})
router.get('/pc', function(req, res, next) {
  res.render('pc', { title: 'EASY' });
});
router.get('/page1', function(req, res, next) {
  res.render('page1', { title: 'EASY' });
});
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
router.post('/commitComment', function(req, res, next) {
  var ui=req.body;

  var Comment=db.getDoc('comment');

  Comment.create(ui,function(err){
    if(err){res.json({flag:500,content:'error'});console.error('create commit error',err);return;}
    console.log('create commit ok');
    res.json({flag:200,content:'ok'});
  })

});
module.exports = router;
