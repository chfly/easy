require('jquery');
var React=require('react');
var ReactDOMServer=require('react-dom/server');
var App=React.createClass({
    render:function(){
        var rows=this.props.datas.map(function(data){
            return (
                <li key={data.id}>{data.text}</li>
            )
        });
        return (
            <ul>{rows}</ul>
        )
    }
});
var inputData=[
    { id: '1454572749717', text: '12', author: '1' },
    { id: '1454576571931', text: 'asdf', author: 'adf' },
    { id: '1454576574155', text: 'asdf', author: 'asdf' },
    { id: '1454576576330', text: 'e', author: 'asdfee' },
    { id: '1454576579065', text: '343', author: '343' }
];
var reactHTML=ReactDOMServer.renderToString(<App datas={inputData}/>);
module.exports=function(){
    return reactHTML
}
//console.log(reactHTML)