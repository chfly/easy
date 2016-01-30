require('../../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
/*import serverjs*/
require('jquery');
require('bootstrap');
var React = require('react');
var img1=require('./img/a1.jpg');
var img2=require('./img/a2.jpg');
var img3=require('./img/a3.jpg');
var styleImg={
    backgroundSize:'100% 100%'
}
module.exports=React.createClass({displayName: "exports",
    render: function() {
        return (
            React.createElement("div", {id: "myCarousel", className: "carousel slide"}, 
                React.createElement("ol", {className: "carousel-indicators"}, 
                    React.createElement("li", {style: styleImg, "data-target": "#myCarousel", "data-slide-to": "0", className: "active"}), 
                    React.createElement("li", {style: styleImg, "data-target": "#myCarousel", "data-slide-to": "1"}), 
                    React.createElement("li", {style: styleImg, "data-target": "#myCarousel", "data-slide-to": "2"})
                ), 

                React.createElement("div", {className: "carousel-inner"}, 
                    React.createElement("div", {className: "item active"}, React.createElement("img", {src: img1, alt: "First slide"})), 
                    React.createElement("div", {className: "item"}, React.createElement("img", {src: img2, alt: "Second slide"})), 
                    React.createElement("div", {className: "item"}, React.createElement("img", {src: img3, alt: "Third slide"}))
                ), 
                React.createElement("a", {className: "carousel-control left", href: "#myCarousel", "data-slide": "prev"}, "‹"), 
                React.createElement("a", {className: "carousel-control right", href: "#myCarousel", "data-slide": "next"}, "›")
            )
        );
    }
});