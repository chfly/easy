/**
 * Created by chenwei on 2016/2/3.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,IndexRoute,Link,Redirect} from 'react-router'
class App extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li key='name'><Link to='about'>about</Link></li>
                    <li key='inbox'><Link to='inbox'>inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
class Home extends React.Component{
    render(){
        return(<h2>welcome to Home</h2>)
    }
}
class Inbox extends React.Component{
    render(){
        return(
            <div>
                <h2>Inbox</h2>
                <h3><Link to='inbox/message/123'>message</Link></h3>
                {this.props.children||'welcome to inbox'}
            </div>
        )
    }
}
class About extends React.Component{
    render(){
        return(<h2>about</h2>)
    }
}
const Message = React.createClass({
    getInitialState(){
        return {data:''}
    },
    componentDidMount(){
        /*方式一
         *请求   /message/id
         *路由： message/:id
         */
        console.log(':id->',this.props.params.id);
        this.setState({data:this.props.params.id});
        /*方式二
         *请求   /message/?id=123
         *路由： message
         */
        console.log('?id->',this.props.location.query.id)
    },
    render(){
        return(<div>{this.state.data}</div>)
    }
})
class NotFound extends React.Component{
    render(){
        return(<div>404 NotFound</div>)
    }
}
const app=(
    <Router>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='about' component={About} />
            <Route path='inbox' component={Inbox}>
                <Route path='message/:id' component={Message}/>.
            </Route>
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
)
const id=document.getElementById('react-main-mount');
ReactDOM.render(app,id);
