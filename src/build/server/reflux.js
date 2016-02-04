/**
 * Created by chenwei on 2016/2/4.
 */
    require('jquery');
var React = require('react');
var Reflux=require('reflux');
var ReactDOMServer=require('react-dom/server');

var commentActions=Reflux.createActions([
    'getComments',
    'publishComment'
]);


var list=[];
var commentStore=Reflux.createStore({
    //list:function(){
    //    return this.getComments()
    //},
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
        this.getComments();
        return list;
    }
})


var style={
    borderBottom:'1px red solid',
    padding:'3px'
};
var Comment=React.createClass({displayName: "Comment",
    render:function(){
        return(
            React.createElement("div", {style: style}, 
                React.createElement("p", null, this.props.author), 
                React.createElement("span", null, this.props.children)
            )
        )
    }

});
var List=React.createClass({displayName: "List",
    render:function(){
        var comments=this.props.data.map(function(comment){
            return(
                React.createElement(Comment, {key: comment.id, author: comment.author}, 
                    comment.text
                )
            );
        });
        return(
            React.createElement("div", null, 
                comments
            )
        )
    }

});
var Form=React.createClass({displayName: "Form",
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
            React.createElement("form", {onSubmit: this.handleSubmit}, 
                React.createElement("input", {
                    type: "text", 
                    placeholder: "请输入用户名", 
                    value: this.state.author, 
                    onChange: this.getAuthor}
                    ), 
                React.createElement("input", {
                    type: "text", 
                    placeholder: "请输入评论", 
                    value: this.state.text, 
                    onChange: this.getText}
                    ), 
                React.createElement("input", {type: "submit", value: "提交"})
            )

        )
    }
});
var Box=React.createClass({displayName: "Box",
    getInitialState:function(){
        return {data:this.props.data}
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
        this.unsubscribe = commentStore.listen(this.onChange);
    },
    componentWillUnmount: function() {
        this.unsubscribe();
    },
    buttonClick:function(){
        commentActions.getComments();
    },
    render: function(){
        return(
            React.createElement("div", null, 
                React.createElement("button", {onClick: this.buttonClick}, "button"), 
                React.createElement("h1", null, "评论话题"), 
                React.createElement(List, {data: this.state.data}), 
                React.createElement(Form, {onHandlerCommit: this.handlerCommite})
            )
        )
    }
});
module.exports=React.createClass({displayName: "exports",
    render:function(){
        return (
            React.createElement("div", null, 
                React.createElement(Box, {data: this.props.data})
            )
        )
    }
})













