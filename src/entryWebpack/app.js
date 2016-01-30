
var React=require('react');
var ReactDOM=require('react-dom');
require('jquery');
require('bootstrap_js');
require('bootstrap_css');
var data=[
    {id:'1',user:'tom','sex':'man'},
    {id:'2',user:'tom1','sex':'man'},
    {id:'3',user:'tom2','sex':'man'},
    {id:'4',user:'tom3','sex':'man'},
    {id:'5',user:'tom4','sex':'man'},
    {id:'6',user:'tom4','sex':'man'},
    {id:'7',user:'tom4','sex':'man'},
    {id:'8',user:'tom8','sex':'man'}
];

var Table=require('../component/table/Table');
var App=React.createClass({
    render: function(){
        return(
                <div>
                    <Table datas={this.props.data}/>
                </div>
        )
    }
});
ReactDOM.render(<App data={data}/>,document.getElementById('example'));
