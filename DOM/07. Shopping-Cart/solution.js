function solve() {
   let products = [];
   let cart = document.getElementsByClassName('shopping-cart')[0];
   const textDiv = document.getElementsByTagName("textarea")[0];
   cart.addEventListener('click', AddToCart)

   function AddToCart(e) {
      let targetProduct = e.target;
      console.log(targetProduct);
      
      let productDiv = targetProduct.parentNode;
      console.log(productDiv);
      let test = productDiv.parentNode;
      console.log(test);
      let children = test.firstChild;
      console.log(children);
      
      //let price = +productDiv.children[2].textContent.split(': ')[1];
      let name = productDiv.children[1].textContent;
      
      products.push(product);
      let addedProduct = `Added ${product.Name} for ${product.Price.toFixed(2)} to the cart.\n`;
      textDiv.value += addedProduct;
   }
}
