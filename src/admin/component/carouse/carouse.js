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
module.exports=React.createClass({
    render: function() {
        return (
            <div id="myCarousel" className="carousel slide">
                <ol className="carousel-indicators">
                    <li style={styleImg} data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li style={styleImg} data-target="#myCarousel" data-slide-to="1"></li>
                    <li style={styleImg} data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active"><img src={img1} alt="First slide"/></div>
                    <div className="item"><img src={img2} alt="Second slide"/></div>
                    <div className="item"><img src={img3} alt="Third slide"/></div>
                </div>
                <a className="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
                <a className="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
            </div>
        );
    }
});