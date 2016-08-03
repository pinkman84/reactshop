var React = require('react');

var CartBox = React.createClass({

  getInitialState: function() {
    return {
      total: 5,
      vouchers:2
    };
  },

  addTotal: function(price){
    this.setState({
      total: this.state.total + price
    })
  },


  handleRemove: function(e){
    this.props.remove(e.target.value)
  },




  render: function() {
    let pendingPurchase = this.props.takeItem.map(function(product){

          return (
            <div key={product.id}>
            {product.name + " "}
            {" " + product.colour + "  \n"}
            £{product.price.toFixed(2)}
            quantity: {product.orderQty}
            <button type="submit" onClick={this.handleRemove} value = {product.id}>remove item</button>
            </div>
            )
      }.bind(this))

    return (
      <div>
      <h3>Cart</h3>
      {pendingPurchase}
      <h3>Sub Total: £{this.state.total.toFixed(2)}</h3>
      <h3>Voucher Discount: £{this.state.vouchers.toFixed(2)}</h3>
      <h3>Total: £{(this.state.total -= this.state.vouchers).toFixed(2)}</h3>
      </div>
      );
  }

});

module.exports = CartBox;