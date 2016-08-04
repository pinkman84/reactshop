var React = require('react');
// var numeral = require('numeral');
var ProductsBox = React.createClass({

  handleSubmit: function(e){
    e.preventDefault()

    this.props.addItem(e.target.value);

  },


  render: function() {
    if(!this.props.items){return <h4>retrieving stock</h4>};
    let productList = this.props.items.map(function(product){
      return(
        <div  
        key={product.id}
        className="product"
         >
        

          <h4>item picture here</h4>
          <p>{product.name}</p>
          <p>{product.colour}</p>
          <p>£{product.price.toFixed(2)}</p>
          <p>Stock available {product.qty}</p>

          <button type="submit" value={product.id} onClick={this.handleSubmit} >add to basket</button>
          
        </div>

        )
    }.bind(this));

    return (

      <div className={this.props.items[0].gender}>
      <h3>{this.props.items[0].gender} range</h3>     
      {productList}
      </div>
      
      );
  }

});

module.exports = ProductsBox;