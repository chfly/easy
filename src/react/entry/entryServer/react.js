var React=require('react');
var ReactDOMServer=require('react-dom/server');
var Comment=React.createClass({
    render:function(){
        return(
            <div>
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
module.exports=React.createClass({
    getInitialState:function(){
        return {data:this.props.data}
    },
    render:function(){
        return (
            <div>
                <List data={this.state.data}/>
                <Form onHandlerCommit={this.handlerCommite}/>
            </div>
        )
    }
});

//var docs=[];
//var reactHTML=ReactDOMServer.renderToString(<App data={docs}/>);

//console.log(reactHTML);
//module.exports=function(){
//    return reactHTML
//}
