var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  
  var price = (Math.floor(Math.random() * 100) + 1);
  
  var itemObj = {[item]: price};
  
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  
  return cart;
}

// addToCart('apples');
// addToCart('bananas');


function viewCart() {
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      
    }
  } else if (cart.length === 1) {
    return `In your cart, you have ${item} at $${price}.`;
  
  } else if (cart.length === 2) {
    return  
    
  } else if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
