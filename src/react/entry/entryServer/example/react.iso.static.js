var React=require('react');
var ReactDOMServer=require('react-dom/server');
var datas=[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
var ProductCategoryRow=React.createClass({
    render:function(){
        return(<tr><td colSpan="2">{this.props.category}</td></tr>);
    }
});
var ProductRow=React.createClass({
    render:function(){
        var name=this.props.product.stocked?this.props.product.name:(<span style={{color:"red"}}>{this.props.product.name}</span>)
        return(
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
});
var ProductTable=React.createClass({
    render:function(){
        var rows=[];
        var lastCategory=null;
        this.props.products.forEach(function(product){
            if(product.name.indexOf(this.props.filterText)){
                return
            }
            if(product.category!==lastCategory){
                rows.push(<ProductCategoryRow  category={product.category} key={product.category}/>)
            }
            rows.push(<ProductRow product={product} key={product.name}/>)
            lastCategory=product.category;
        }.bind(this));
        return(
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }
});
var SearchBar=React.createClass({
    getInitialState:function(){
        return{
            //filterText: ''
        }
    },
    handlerChange(event){
        this.props.onFiler(event.target.value);
    },
    render:function(){
        return(
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={this.handlerChange}
                    />
                <input
                    type="checkbox"
                    />
                <label>Only show products in stock</label>
            </form>
        )
    }
});
var FilterableProductTable=React.createClass({
    getInitialState:function(){
      return{
          filterText: ''
      }
    },
    getFilterText:function(text){
        this.setState({
            filterText:text
        })
    },
    render:function(){
        return(
            <div>
                <SearchBar onFiler={this.getFilterText}/>
                <ProductTable products={datas} filterText={this.state.filterText}/>
            </div>
        )
    }
});

var reactHTML=ReactDOMServer.renderToString(<FilterableProductTable />);
console.log(reactHTML);
module.exports=function(){
    return reactHTML
}