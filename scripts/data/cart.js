 let cartQuantity=0;

 function uppdateCartQuantity(button){
    cartQuantity++
    document.querySelector(".cart-Quantity").innerHTML=cartQuantity
//
   // let productID=button.id.slice(3)
   // console.log(productID)
  
 
}
export{cartQuantity,uppdateCartQuantity}




