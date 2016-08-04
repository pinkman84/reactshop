var Shop = require('../shop.js');
var assert = require('chai').assert;
var Stock = require('../sampleData.js');

describe('shop tests', function(){
  beforeEach(function(){
    shop = new Shop();

  })

  it("should be able to seperate stock by gender", function(){
    assert.equal(7, shop.filterProducts(Stock, "mens").length
  })
})
