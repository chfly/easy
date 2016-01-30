
var React=require('react');
var ReactDOMServer=require('react-dom/server');
var data=[
    {id:'1',user:'tom','sex':'man'},
    {id:'2',user:'tom1','sex':'man'},
    {id:'3',user:'tom2','sex':'man'},
    {id:'4',user:'tom3','sex':'man'},
    {id:'5',user:'tom4','sex':'man'}
];

var Table=require('../build/table/Table');
var App=React.createClass({displayName: "App",
    render: function(){
        return(
                React.createElement("div", null, 
                    React.createElement(Table, {datas: this.props.data})
                )
        )
    }
});
var reactHTML=ReactDOMServer.renderToString(React.createElement(App, {data: data}))
//console.log(reactHTML)