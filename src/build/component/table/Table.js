/**
 * Created by chenwei on 2016/1/28.
 */
var React=require('react');
module.exports=React.createClass({displayName: "exports",
    render:function(){
        return(
            React.createElement("table", null, 
                React.createElement("tbody", null, 
                
                    this.props.datas.map(function(data){
                        return(
                            React.createElement("tr", {key: data.id}, 
                                React.createElement("td", null, data.id), 
                                React.createElement("td", null, data.user), 
                                React.createElement("td", null, data.sex)
                            )
                        )
                    })
                
                )
            )
        )
    }
});