function loadScript(source) {
  const script = document.createElement("script");
  script.src = source;
 // document.body.appendChild(script);
  //console.log(products);
}
loadScript('C:\Users\wow\Desktop\projects\amazon\scripts\data\products-data.js');

function generateHTML() {
    let HTML="";
   products.forEach((product)=>{
            HTML +=`
            <div id="here" class="product-container">
            <div class="product-image-container">
            <img
                class="product-image"
                src="${product.image}"
            />
            </div>

            <div class="product-name" limit-text-to-2-lines>${product.name }</div>
            <div class="product-rating-container">
            <img class="stars" src="images/ratings/rating-${(product.rating.stars)*10}.png" />
            <div class="rate-counts">${product.rating.count}</div>
            </div>
            <div class="price">${product.priceCents}</div>
            <div class="product-quantity-container">
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>
            <div class="product-spacer"></div>
            <button id="btn${product.id}" class="btn add-to-cart-btn js-add-to-cart">Add to Cart</button>
        </div>`
         
      
     
 })

  
 return HTML;
}
function uppdateCartQuantity(button){
    
    console.log('updated'
    )
    let productID=button.id.slice(3)
    console.log(productID)
  
    

}
renderProductsHTML()
function renderProductsHTML(){
    let productsHTML=generateHTML()
  
     document.getElementById("products-grid").innerHTML=productsHTML

     let buttons = document.querySelectorAll('.js-add-to-cart')
     buttons.forEach((button)=>{
     
    button.addEventListener('click', uppdateCartQuantity(button))
     })
        

}
    
 
