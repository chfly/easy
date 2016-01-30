var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});
router.get('/app', function(req, res, next) {
    var reactHTML=require('../src/build/server/app')();
    //console.log(reactHTML);
    var html='<!doctype html>' +
          '<html>' +
          '<head>' +
          '<meta charset="utf-8">' +
          '<title>同构</title>' +
          '<meta name="viewport" content="width=device-width,initial-scale=1">' +
          '<link rel="shortcut icon" href="http://localhost:8080/easy.ico">' +
          '<link rel="stylesheet" href="http://localhost:8080/css/app.css" >' +
          '</head><body><div id="example">'
          +reactHTML+
          '</div><script src="http://localhost:8080/js/app.js"></script>'+
          '</body></html>';
    res.send(html);
    //res.render('app', { reactHtml: reactHTML });
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
