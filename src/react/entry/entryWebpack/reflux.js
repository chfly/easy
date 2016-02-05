/**
 * Created by chenwei on 2016/2/4.
 */
    require('jquery');
var React = require('react');
var Reflux=require('reflux');
var ReactDOM=require('react-dom');

var commentActions=Reflux.createActions([
    'getComments',
    'publishComment'
]);


var list=[];
var commentStore=Reflux.createStore({
    /*方式三*/
    listenables:commentActions,
    init:function(){
        /*方式一*/
        //this.listenTo(commentActions.getComments, this.getComments);
        //this.listenTo(commentActions.publishComment, this.publishComment);
        /*方式二*/
        //this.listenToMany(commentActions);
    },
    getComments:function(){
        $.get('/getComments',function(data,statu){
            if(data.flag==200){
                list=data.content;
                this.trigger(list);
                return list;
            }
        }.bind(this))

    },
    publishComment:function(comment){
        $.post('/commitComment',comment,function(data,statu){
            if(data.flag==200){
                this.getComments();
            }
        }.bind(this))

    },
    getList:function(){
        return list;
    }
})


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
        return {data:commentStore.getList()}
    },
    onChange: function() {
        this.setState({
            data: commentStore.getList()
        });
    },
    handlerCommite:function(comment){
        comment.id=Date.now();
        commentActions.publishComment(comment);
    },
    componentDidMount:function(){
        commentActions.getComments();
        this.unsubscribe = commentStore.listen(this.onChange);
    },
    componentWillUnmount: function() {
        this.unsubscribe();
    },
    buttonClick:function(){
        commentActions.getComments();
        //$.get('/write',function(data,err){
        //    if(err){return console.log(err)}
        //})
    },
    render: function(){
        return(
            <div>
                <button onClick={this.buttonClick}>button</button>
                <h1>评论话题</h1>
                <List data={this.state.data} />
                <Form onHandlerCommit={this.handlerCommite}/>
            </div>
        )
    }
});
var App=React.createClass({
    render:function(){
        return (
            <div>
                <Box />
            </div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('react-main-mount'));













