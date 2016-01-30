/**
 * Created by chenwei on 2016/1/25.
 */
/*import css*/
require('../../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
/*import serverjs*/
require('jquery');
require('bootstrap');
var React=require('react');
var  nav_data={
    navClass:"navbar navbar-default navbar-fixed-top",
    layout:'',
    title:{
        href:"#",
        text:'project'
    }
};

module.exports=React.createClass({
    render:function(){
        var mixins=[require('../../mixin/getTargetValue')];
        var data=this.props.nav_data;
        return(
            <nav
                className={(data.navClass)?data.navClass:"navbar navbar-inverse navbar-fixed-top"}>
                <div className={data.layout?data.layout:''}>
                    <div className="navbar-header">
                        <a className="navbar-brand"
                           href={data.title?(data.title.href?data.title.href:"#"):"#"}>
                           {data.title?(data.title.text?data.title.text:'title'):"title"}
                        </a>
                    </div>
                </div>
                <div>
                    <form className="navbar-form pull-right">
                        <input
                            type="text"
                            placeholder="User"
                            ClassName="form-controller"
                            />
                        <input
                            type="password"
                            placeholder="Password"
                            ClassName="navbar-right"
                            />
                        <input
                            type="submit"
                            value="登录"
                            ClassName="pull-right"
                            />
                    </form>
                </div>
            </nav>
        )
    }
})