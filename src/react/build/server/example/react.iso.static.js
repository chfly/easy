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
var ProductCategoryRow=React.createClass({displayName: "ProductCategoryRow",
    render:function(){
        return(React.createElement("tr", null, React.createElement("td", {colSpan: "2"}, this.props.category)));
    }
});
var ProductRow=React.createClass({displayName: "ProductRow",
    render:function(){
        var name=this.props.product.stocked?this.props.product.name:(React.createElement("span", {style: {color:"red"}}, this.props.product.name))
        return(
            React.createElement("tr", null, 
                React.createElement("td", null, name), 
                React.createElement("td", null, this.props.product.price)
            )
        )
    }
});
var ProductTable=React.createClass({displayName: "ProductTable",
    render:function(){
        var rows=[];
        var lastCategory=null;
        this.props.products.forEach(function(product){
            if(product.name.indexOf(this.props.filterText)){
                return
            }
            if(product.category!==lastCategory){
                rows.push(React.createElement(ProductCategoryRow, {category: product.category, key: product.category}))
            }
            rows.push(React.createElement(ProductRow, {product: product, key: product.name}))
            lastCategory=product.category;
        }.bind(this));
        return(
            React.createElement("table", null, 
                React.createElement("thead", null, 
                React.createElement("tr", null, 
                    React.createElement("th", null, "Name"), 
                    React.createElement("th", null, "Price")
                )
                ), 
                React.createElement("tbody", null, 
                rows
                )
            )
        )
    }
});
var SearchBar=React.createClass({displayName: "SearchBar",
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
            React.createElement("form", null, 
                React.createElement("input", {
                    type: "text", 
                    placeholder: "Search...", 
                    onChange: this.handlerChange}
                    ), 
                React.createElement("input", {
                    type: "checkbox"}
                    ), 
                React.createElement("label", null, "Only show products in stock")
            )
        )
    }
});
var FilterableProductTable=React.createClass({displayName: "FilterableProductTable",
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
            React.createElement("div", null, 
                React.createElement(SearchBar, {onFiler: this.getFilterText}), 
                React.createElement(ProductTable, {products: datas, filterText: this.state.filterText})
            )
        )
    }
});

var reactHTML=ReactDOMServer.renderToString(React.createElement(FilterableProductTable, null));
console.log(reactHTML);
module.exports=function(){
    return reactHTML
}