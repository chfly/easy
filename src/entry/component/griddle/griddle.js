/**
 * Created by chenwei on 2016/1/28.
 */
var React=require('react');
var Griddle=require('griddle-react');
var fakeData=require('../../../data/fakeData').fakeData;
var columnMeta=require('../../../data/columnMeta').columnMeta;
var resultsPerPage = 200;
var ReactApp = React.createClass({
    componentDidMount: function () {
        console.log(fakeData);
    },
    render: function () {
        return (
            <div id="table-area">
                <Griddle results={fakeData}
                         columnMetadata={columnMeta}
                         resultsPerPage={resultsPerPage}
                         tableClassName="table"/>
            </div>
        )
    }
});
module.exports=ReactApp;