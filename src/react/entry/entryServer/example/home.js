require('jquery');
var React=require('react');
var ReactDOMServer=require('react-dom/server');
var style={
    borderBottom:'1px red solid',
    padding:'3px'
};


var Comment=React.createClass({
    render:function(){
        return(
            <div style={style}>
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
            <div>
                <h1>评论话题</h1>
                <List data={this.state.data}/>
                <Form onHandlerCommit={this.handlerCommite}/>
            </div>
        )
    }
});

module.exports=React.createClass({
    render:function(){
        return (
            <div>
                <Box data={this.props.data}/>
            </div>
        )
    }
})