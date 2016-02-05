/**
 * Created by chenwei on 2016/1/27.
 */
module.exports=function(key){
    var state={};
    var that = this;
    return function(e){
        state[key]=e.target.value;
        that.setState(state);
    }
}