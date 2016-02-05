//require('jquery');
var React=require('react');
var ReactDOMServer=require('react-dom/server');
var ReactApp=require('../component/griddle/griddle');

var reactHTML=ReactDOMServer.renderToString(<ReactApp />);
//console.log(reactHTML);
module.exports=function(){
    return reactHTML
}