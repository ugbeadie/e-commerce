const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navUl = document.getElementsByClassName('nav-items')[0];
const itemCount = document.getElementsByClassName('count')[0];
const minus = document.getElementsByClassName('minus')[0];
const plus = document.getElementsByClassName('plus')[0];
const addToCart = document.getElementsByClassName('amount-right')[0];
const cartNumber = document.getElementsByClassName('cart-number')[0];
const cart = document.getElementsByClassName('cart')[0];
const cartCard = document.getElementsByClassName('cart-card')[0];
const cardProduct = document.getElementsByClassName('prod')[0];
const emptyCart = document.getElementsByClassName("empty")[0];
const checkoutBtn = document.getElementsByClassName("checkout")[0];
const mainContent = document.getElementsByClassName("main-card")[0];
let count = 0;

toggleButton.addEventListener('click', () => {
    navUl.classList.toggle('active');
    document.body.classList.toggle('hidden')
    document.body.classList.toggle("cross");
});

plus.addEventListener('click', () => {
    itemCount.textContent = count+=1;
})

minus.addEventListener('click', () => {
    if (count > 0) {
        itemCount.textContent = count-=1;
    }else {
        count = 0;
    }
})

cart.addEventListener('click', () => {
    cartCard.classList.toggle('display');
})

addToCart.addEventListener('click', () => {
   if(count > 0) {
    //    alert('added to cart');
    cardProduct.innerHTML = `
    <img src="images/image-product-1-thumbnail.jpg" alt="cart item thumbnail" class="cart-thumbnail">
    <div class="added-prod">
        <p>Fall Limited Edition Sneakers</p>
        <div class="quantity">
            <p>$125.00 x ${count} <span class="total">$${125*count}</span></p>            
        </div>
    </div>
    <img class="delete" src="images/icon-delete.svg" alt="delete cart item" onclick="letsDelete()">`
      
    cardProduct.style.display = "flex";
    emptyCart.style.display = "none";
    checkoutBtn.style.display = "flex";
    cartNumber.style.display = "flex";
    cartNumber.textContent = count;
   } else {
      alert("can't add numbers less than one");
   }
});

function letsDelete() {
    emptyCart.style.display = "flex";
    checkoutBtn.style.display = "none";
    cartNumber.style.display = "none";
    cardProduct.style.display = "none";
   }
