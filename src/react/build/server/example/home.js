require('jquery');
var React=require('react');
var ReactDOMServer=require('react-dom/server');
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
    getComments:function(){
        $.get('/getComments',function(docs,statu){
        //$.get('/app',function(docs,statu){
            if(docs.flag==200){
                //$('#example').empty().append(docs.reactHtml);
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

                $.get('/getComments',function(docs,statu){
                //$.get('/app',function(docs,statu){
                    if(docs.flag==200){
                        //$('#example').empty().append(docs.reactHtml);
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
        this.getComments()
        //setInterval(this.getComments(),1000)
    },
    render: function(){
        return(
            React.createElement("div", null, 
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