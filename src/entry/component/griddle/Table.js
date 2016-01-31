/**
 * Created by chenwei on 2016/1/28.
 */
var React=require('react');
module.exports=React.createClass({
    render:function(){
        return(
            <table>
                <tbody>
                {
                    this.props.datas.map(function(data){
                        return(
                            <tr key={data._id}>
                                <td>{data._id}</td>
                                <td>{data.user}</td>
                                <td>{data.sex}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
});