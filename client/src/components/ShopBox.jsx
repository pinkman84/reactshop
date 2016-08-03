let React = require('react');
let ProductsBox = require('./ProductsBox.jsx');
let CartBox = require('./CartBox.jsx');
let SampleData = require('../sampleData.js');
let NavBox = require('./NavBox.jsx');
let CategoryBox = require('./CategoryBox.jsx');
let Shop = require('../shop.js');

let shop = new Shop();
//main box to get the data and pass it down to the dumb elements
let ShopBox = React.createClass({
  getInitialState: function() {
    return {
      products: SampleData,
      cart: []

    };
  },

  filterProducts: function(gender){
      //need a filter and a map
      let list = this.state.products.filter(function(product){
        // console.log("filter", product);
        return (product.gender === gender)
      })
      return list
    },

    filterCategories: function(array){
      let list = array.map(function(items){
        return (items.style)
      })
      return list
    },

    //this function will handle adding something to the shopping cart
    addToBasket: function(item){
      this.checkStock
      let selectedItem = this.state.products.filter(function(product){
        return (product.id === +item)
      })
      console.log("selected Item", selectedItem)
      for(var i = 0; i < this.state.cart.length; i++){
          if(this.state.cart[i].id === selectedItem.first.id ){
            this.state.cart[i].orderQty += 1
          }
          else{
            let updatedCart = this.state.cart
            updatedCart.concat(selectedItem)
            console.log(updatedCart);
            this.setState({
              cart: updatedCart 
            })
          }
      }
      
    },

    //this will be called if an item is deleted from a basket
    deleteFromBasket: function(item){
      console.log(item)
      let cart = this.state.cart
      console.log("cart", cart);
      for (var i = 0; i < cart.length; i++) {
        if(cart[i].id === item){
          cart.splice(cart[i], 1)
        }
        this.setState({cart: cart})
      }
      
    },

    //this will check if an item is out of stock
    checkStock: function(item){
      if(!item.qty){
        return
      }

    },


    //this will check what is in the basket and apply discounts and vouchers
    voucherchecker: function(){

    },


  render: function(){
    return(
      <div>
        <NavBox  />
        <CategoryBox  />
        <ProductsBox 
            items={this.filterProducts('womens')} 
            addItem={this.addToBasket}/>
        <ProductsBox 
            items={this.filterProducts('mens')} 
            addItem={this.addToBasket} />
        <CartBox takeItem={this.state.cart} remove={this.deleteFromBasket} total={this.calculateTotal} />
      </div>
      )
  }
})

module.exports = ShopBox;
