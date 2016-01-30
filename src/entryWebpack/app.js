require('bootstrap_css');
require('jquery');
require('bootstrap_js');
var React=require('react');
var ReactDOM=require('react-dom');
var style={
    borderBottom:'1px red solid',
    padding:'3px'
};

var Comment=React.createClass({
    render:function(){
        return(
            <div  style={style}>
                <p >{this.props.author}</p>
                <span >{this.props.children}</span>
            </div>
        )
    }

});
var List=React.createClass({
    render:function(){
        var comments=this.props.data.map(function(comment){
            return(
                <Comment key={comment.id} author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return(
            <div>
                {comments}
            </div>
        )
    }

});
var Form=React.createClass({
    getInitialState:function(){
        return {author:'',text:''}
    },
    getAuthor:function(e){
        this.setState({author:e.target.value})
    },
    getText:function(e){
        this.setState({text:e.target.value})
    },
    handleSubmit:function(e){
        e.preventDefault();
        var author=this.state.author;
        var text=this.state.text;
        //alert(author+" | "+text)
        if(!author||!text){
            return;
        }
        this.props.onHandlerCommit({author:author,text:text});
        this.setState({author:'',text:''});
    },
    render:function(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='请输入用户名'
                    value={this.state.author}
                    onChange={this.getAuthor}
                    />
                <input
                    type='text'
                    placeholder='请输入评论'
                    value={this.state.text}
                    onChange={this.getText}
                    />
                <input type='submit' value="提交"/>
            </form>

        )
    }
});
var Box=React.createClass({
    getInitialState:function(){
        return {data:this.props.data}
    },
    getComments:function(){
        //$.get('/app',function(docs,statu){
        $.get('/getComments',function(docs,statu){
            if(docs.flag==200){
                this.setState({data:docs.content})
            }else{
                console.log('getCommits error')
            }
        }.bind(this))
    },
    handlerCommite:function(comment){
        comment.id=Date.now();
        $.post('/commitComment',comment,function(docs,state){
            if(docs.flag==200){
                //var comments=this.state.data.push(comment);
                //this.setState({data:comments});
                //$.get('/app',function(docs,statu){
                $.get('/getComments',function(docs,statu){
                    if(docs.flag==200){
                        this.setState({data:docs.content})
                    }else{
                        console.log('getCommits error')
                    }
                }.bind(this))
            }
        }.bind(this))
    },
    componentDidMount:function(){
        this.getInitialState();
        //setInterval(this.getComments(),1000)
    },
    render: function(){
        return(
            <div>
                <h1>评论话题</h1>
                <List data={this.state.data}/>
                <Form onHandlerCommit={this.handlerCommite}/>
            </div>
        )
    }
});
var App=React.createClass({
    render:function(){
        return (
            <div>
                <Box  data={this.props.data}/>
            </div>
        )
    }
});



ReactDOM.render(<App data={[]}/>, document.getElementById('example'));