/**
 * Created by chenwei on 2016/1/28.
 */
var React=require('react');
var Griddle=require('griddle-react');
var fakeData=require('../../../data/fakeData').fakeData;
var columnMeta=require('../../../data/columnMeta').columnMeta;
var resultsPerPage = 200;
var ReactApp = React.createClass({displayName: "ReactApp",
    componentDidMount: function () {
        console.log(fakeData);
    },
    render: function () {
        return (
            React.createElement("div", {id: "table-area"}, 
                React.createElement(Griddle, {results: fakeData, 
                         columnMetadata: columnMeta, 
                         resultsPerPage: resultsPerPage, 
                         tableClassName: "table"})
            )
        )
    }
});
module.exports=ReactApp;