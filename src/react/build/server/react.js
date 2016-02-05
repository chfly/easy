var React=require('react');
var ReactDOMServer=require('react-dom/server');
var Comment=React.createClass({displayName: "Comment",
    render:function(){
        return(
            React.createElement("div", null, 
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
module.exports=React.createClass({displayName: "exports",
    getInitialState:function(){
        return {data:this.props.data}
    },
    render:function(){
        return (
            React.createElement("div", null, 
                React.createElement(List, {data: this.state.data}), 
                React.createElement(Form, {onHandlerCommit: this.handlerCommite})
            )
        )
    }
});

//var docs=[];
//var reactHTML=ReactDOMServer.renderToString(<App data={docs}/>);

//console.log(reactHTML);
//module.exports=function(){
//    return reactHTML
//}
