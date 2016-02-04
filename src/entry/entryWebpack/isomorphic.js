require('jquery');
var React=require('react');
var ReactDOM=require('react-dom');
var App=React.createClass({
    getInitialState:function(){
        return {datas:[]}
    },
    getComments:function(){
        $.get('/getComments',function(docs,statu){
            if(docs.flag==200){
                this.setState({datas:docs.content})
            }else{
                console.log('getCommits error')
            }
        }.bind(this))
    },
    componentDidMount:function(){
        this.getComments();
    },
    render:function(){
        var rows=this.state.datas.map(function(data){
            return (
                <li key={data.id}>{data.text}</li>
            )
        });
        return (
            <ul>{rows}</ul>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('react-main-mount'));