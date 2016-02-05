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
    },
    list:[
        {
            id:'nav_1_1',
            class:"active",
            href:"#",
            text:"Home"
        },
        {
            id:'nav_1_2',
            class:"item",
            href:"#",
            text:"About"
        },
        {
            id:'nav_1_3',
            class:"item",
            href:"#",
            text:"Contactmy"
        }
    ]


};
//var getlist=function(){
//    var data=nav_data;
//    console.log(data);
//    if(data.list){
//        data.list.map(function(item){
//            console.log(item);
//            return(
//                <li key={item.id} ClassName={item.class}>
//                    <a href={item.href}>
//                        {item.text}
//                    </a>
//                </li>
//            )
//        })
//    }else{
//        return(
//            <li ClassName="active">
//                <a href="#">
//                    item
//                </a>
//            </li>
//        )
//    }
//};
//console.log("getlist",getlist());

module.exports=React.createClass({
    render:function(){
        var data=this.props.nav_data;
        return(
            <nav
                className={(data.navClass)?data.navClass:"navbar navbar-default navbar-fixed-top"}>
                <div
                    className={data.layout?data.layout:''}>
                    <div className="navbar-header">
                        <a className="navbar-brand"
                           href={data.title?(data.title.href?data.title.href:"#"):"#"}>
                           {data.title?(data.title.text?data.title.text:'title'):"title"}
                        </a>
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#sublist">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div
                        class="navbar-collapse collapse "
                        id="sublist">
                        <ul
                            className="nav navbar-nav ">
                            {
                                data.list?(data.list.map(function(item){
                                    return(
                                        <li key={item.id} ClassName={item.class}>
                                            <a href={item.href}>
                                                {item.text}
                                            </a>
                                        </li>
                                    )
                                })):""
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
})