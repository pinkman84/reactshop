var React = require('react');

var CartBox = React.createClass({

  getInitialState: function() {
    return {
      total: 0.00,
      voucher: '',
      sample: 10
    };
  },

  handleRemove: function(e){
    this.props.remove(e.target.value)
  },

  handleChange: function(e){
    console.log(e.target.value);
    this.setState({
      vouchers: e.target.value 
    });
  },

  applyVouchers: function(e){
    e.preventDefault()
    this.props.applyVouchers(this.state.voucher)
    this.setState({
      voucher: '' 
    });
  },

  render: function() {
    let pendingPurchase = this.props.takeItem.map(function(product){
          return (
            <div className="product" key={product.id} ref={(product.price.toFixed(2) * product.orderQty)}>
            <p>{product.name + " "}</p>
            <p>{" " + product.colour + "  \n"}</p>
            <p>item(s) total £{(product.price.toFixed(2) * product.orderQty)}</p>
            <p>quantity: {product.orderQty}</p>
            <button type="submit" onClick={this.handleRemove} value = {product.id}>remove item</button>
            </div>

            )

      }.bind(this))

    return (
      <div className="cart">
        <h3 className="cart-header">Cart</h3>
        <img className="basket" src="/images/cart.png" width="30" height="30" />
        {pendingPurchase}
        <form onSubmit={this.applyVouchers}>
          <input type="text" placeholder="voucher code" onChange={this.handleChange}/>
          <input type="submit" />
        </form>
        <h3>Sub Total: £{this.props.subTotal(pendingPurchase).toFixed(2)}</h3>
        <h3>Voucher Discount: £{this.state.sample}</h3>
        <h3>Total: £{(this.props.subTotal(pendingPurchase).toFixed(2) - this.state.sample)}</h3>
      </div>
      );
  }

});

module.exports = CartBox;