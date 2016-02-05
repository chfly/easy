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

module.exports=React.createClass({displayName: "exports",
    render:function(){
        var data=this.props.nav_data;
        return(
            React.createElement("nav", {
                className: (data.navClass)?data.navClass:"navbar navbar-default navbar-fixed-top"}, 
                React.createElement("div", {
                    className: data.layout?data.layout:''}, 
                    React.createElement("div", {className: "navbar-header"}, 
                        React.createElement("a", {className: "navbar-brand", 
                           href: data.title?(data.title.href?data.title.href:"#"):"#"}, 
                           data.title?(data.title.text?data.title.text:'title'):"title"
                        ), 
                        React.createElement("button", {
                            type: "button", 
                            className: "navbar-toggle", 
                            "data-toggle": "collapse", 
                            "data-target": "#sublist"}, 
                            React.createElement("span", {className: "icon-bar"}), 
                            React.createElement("span", {className: "icon-bar"}), 
                            React.createElement("span", {className: "icon-bar"})
                        )
                    ), 
                    React.createElement("div", {
                        class: "navbar-collapse collapse ", 
                        id: "sublist"}, 
                        React.createElement("ul", {
                            className: "nav navbar-nav "}, 
                            
                                data.list?(data.list.map(function(item){
                                    return(
                                        React.createElement("li", {key: item.id, ClassName: item.class}, 
                                            React.createElement("a", {href: item.href}, 
                                                item.text
                                            )
                                        )
                                    )
                                })):""
                            
                        )
                    )
                )
            )
        )
    }
})