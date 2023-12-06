const products = [
   
    {
      name:"Cherry",
      price: 0.99,
      quantity: 0,
      productId: 1,
      image: 'images/cherry.jpg',
    },

    {
      name:"Orange",
      price: 0.75,
      quantity: 0,
      productId: 2,
      image: 'images/orange.jpg',
    },

    {
      name:"Strawberry",
      price: 1.99,
      quantity: 0,
      productId: 3,
      image: 'images/strawberry.jpg',
    },
];

// Push products into the cart
products.push();





/* Empty array named cart */
    let cart = [];
   
   
  

    function addProductToCart(productId) {
      products.forEach(product => {
        if (product.productId === productId) {
          // Increase the product's quantity
          product.quantity++;
      // If the product is not already in the cart, add it to the cart
      if (!cart.includes(product)) {
      // Add product to the cart
        cart.push(product);
      }
    } 
  });
}
        
      
   
   // increaseQuantity should get the correct product based on the productId
   function increaseQuantity(productId) {
     cart.forEach(cartItem => {
    // Increase quantity of the product  
      if (cartItem.productId===productId && cartItem.quantity >= 1) {
            cartItem.quantity++;
      }
    }
  )};
   
   
   
   // decreaseQuantity should get the correct product based on the productId
    function decreaseQuantity(productId) {

      let productInCartIndex = cart.findIndex((item) =>
          item.productId === productId); 

      cart.forEach(cartItem => {
      // Decrease quantity of the product
      if (cartItem.productId===productId && cartItem.quantity > 0) {
            cartItem.quantity--;
    // If product quantity is equal to zero, remove product from the cart  
    } else if (cartItem.productId===productId && cartItem.quantity===0) {
                cart.splice(productInCartIndex, 1);
    }
  }
)};
   
   
   // removeProductFromCart should get the correct product based on the productId
   function removeProductFromCart(productId) {

    let productInCartIndex = cart.findIndex((item) =>
          item.productId === productId);

      products.forEach(product => {
      // Update the product quantity to 0, remove product from cart
      if (product.productId === productId) {
            product.quantity=0;     
              cart.splice(productInCartIndex, 1);
     }
  });
}

   
   
  function cartTotal() {
    let total = 0;
      cart.forEach(function (cartItem) {
        // Calculate cart total
        total += cartItem.quantity * cartItem.price;
    });
    return total.toFixed(2);
   }
    
   
    
   // Keeps track of how much money the customer paid
   let totalPaid = 0;
   
   function pay(amount) {
     totalPaid = totalPaid + amount;
      // totalPaid += amount;
      
      
      const balance = totalPaid - cartTotal();
        // If balance is equal to zero or more, set totalPaid back to 0 and empty the cart
        if (balance >= 0) {
            totalPaid = 0;
            emptyCart();
        }
            
        return balance;
  }

  
   
   function emptyCart() {
     // Empty the cart
      cart = [];
   }
    
  
module.exports = {
  products,
  cart, 
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
   // currency
};
