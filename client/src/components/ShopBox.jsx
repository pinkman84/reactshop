let React = require('react');
let ProductsBox = require('./ProductsBox.jsx');
let CartBox = require('./CartBox.jsx');
let SampleData = require('../sampleData.js');
let NavBox = require('./NavBox.jsx');
let CategoryBox = require('./CategoryBox.jsx');
let Vouchers = require('../voucherData.js');


//main box to get the data and pass it down to the dumb elements
let ShopBox = React.createClass({
  getInitialState: function() {
    return {
      products: SampleData,
      cart: [],
      vouchers: Vouchers
    };
  },

  filterProducts: function(gender){
      //need a filter and a map
      let list = this.state.products.filter(function(product){
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
      let selectedItem = this.state.products.filter(function(product){
        return (product.id === +item)
      })
      // let updatedCart = this.state.cart
      this.checkStock(selectedItem[0])
    },

    //this will check if an item is out of stock
    checkStock: function(item){
      if(item.orderQty > item.qty){
        window.promt("not enough stock, would you like us to contact you when we have more?")
      } else{
      let updatedCart = this.state.cart
      this.checkBasket(item, updatedCart)
    }
  },

  checkBasket: function(item, list){
    console.log("In here: ", list, item);
    if(!list.length){
      var newList = list.concat(item);      
      this.setState({
        cart: newList 
      });
    }
    for(var i = 0; i < list.length; i++){
      if(list[i].id === item.id ){
        list[i].orderQty += 1
        this.setState({cart: list})
      }
      else{
        var newList = list.concat(item)
        this.setState({
          cart: newList 
        });
      }
    }
  },

    //this will be called if an item is deleted from a basket
    deleteFromBasket: function(item){
      let cart = this.state.cart
      console.log("cart", cart, item);
      for(var i = 0; i < cart.length; i++){
        if (cart[i].id == item) {
          if (cart[i].orderQty > 1) {
            cart[i].orderQty -= 1
            console.log(cart);
            this.setState({
              cart: cart 
            });
          } else {
           cart.splice(i, 1);
           this.setState({
            cart: cart
          });
         }
       }
     }
   },

    //this will check what is in the basket and apply discounts and vouchers
    applyVouchers: function(input){
      let attempt = this.state.voucher.filter(function(code){
        return (input === code)
      })
    },

    calculateSubTotal: function(products){
      let subTotal = 0
      if (!products.length){
        return subTotal
      }
      else{
        for(var i = 0; i < products.length; i++){

          subTotal += +products[i].ref
        }
        return subTotal
      }
    },

    render: function(){
      return(
        <div>
        <ProductsBox 
        className="womens"
        items={this.filterProducts('womens')} 
        addItem={this.addToBasket}/>
        <ProductsBox 
        className="mens"
        items={this.filterProducts('mens')} 
        addItem={this.addToBasket} />
        <CartBox 
        className="cart"
        takeItem={this.state.cart} 
        remove={this.deleteFromBasket} 
        total={this.calculateTotal}
        subTotal={this.calculateSubTotal}
        applyVouchers={this.applyVouchers} />
        </div>
        )
    }
  })

module.exports = ShopBox;
