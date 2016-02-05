require('jquery');
var React=require('react');
var ReactDOM=require('react-dom');
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

var App=React.createClass({
    getInitialState:function(){
        return {data:[]}
    },
    getComments:function(){
        $.get('/getComments',function(docs,statu){
            if(docs.flag==200){
              //return  {data:docs.content};
                this.setState({data:docs.content});
                console.log('getcomment',this.state)
            }else{
                console.log('getCommits error')
              //return {data:[]};
                this.setState({data:[]});
            }
        }.bind(this))
    },
    handlerCommite:function(comment){
        comment.id=Date.now();
        $.post('/commitComment',comment,function(docs,state){
            if(docs.flag==200){
                //history.go(0);
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
        this.getComments();
        console.log('componentDidMount',this.state)
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

ReactDOM.render(<App />, document.getElementById('react'));