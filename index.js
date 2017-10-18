var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*100)+1;
 var itemObject = {};
 itemObject[item]=price
 cart.push(itemObject)
 console.log(item + " has been added to your cart.");
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if(cart.length < 3){
    var items = [];
    for (var i = 0; i < 2; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(" and ") + ".");
  } else {
    var items = [];
    var n = cart.length-1;
    for (var i = 0; i < n; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    var lastItemKey = Object.keys(cart[n])
    var lastItem = `${lastItemKey} at $${cart[n][lastItemKey]}`;
    console.log("In your cart, you have " + items.join(", ") + ", and " + lastItem +".");
  }

}

function total() {
  // write your code here
  var total = 0;
  for(var i=0;i<cart.length;i++){
    var keys = Object.keys(cart[i]);

  }
  return `${total} = ${total} + ${cart[i][keys]}`;
}


function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
