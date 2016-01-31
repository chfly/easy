require('bootstrap_css');
//require('jquery');
//require('bootstrap_js');
require('./css/my.css');
var React=require('react');
var ReactDOM=require('react-dom');
var ReactApp=require('../component/griddle/griddle');
var mountNode=document.getElementById('react-main-mount');
ReactDOM.render(<ReactApp />, mountNode);