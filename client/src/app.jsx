var React = require('react');
var ReactDOM = require('react-dom');
var ShopBox = require('./components/ShopBox.jsx');


window.onload = function(){
  ReactDOM.render(
    <ShopBox />,
    document.getElementById('app')
  );
};
