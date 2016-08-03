let Shop = function(){
  this.womensRange = [];
  this.mensRange = [];
  this.shoppingCart = [];
}

Shop.prototype = {
  //this will filter the products to male and female for the seperate product boxes
  filterProducts: function(array, gender){
    //need a filter and a map
    let list = array.filter(function(product){
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
    let selectedItem
    

    
  },

  //this will be called if an item is deleted from a basket
  handleDeleteFromBasket: function(item, cart){
    for (var i = 0; i < cart.length; i++) {
      if(cart[i].id === item.id){
        //need to check if the arguments are index first?
        cart.splice(1, i);
      }
    }
  },

  //this will check if an item is out of stock
  checkStock: function(item){
    if(!item.qty){
      return;
    }

  },

  //this will check what is in the basket and apply discounts and vouchers
  voucherchecker: function(){

  }

}

module.exports = Shop;