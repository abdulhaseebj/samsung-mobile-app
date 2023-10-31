function back() {
    window.location = "index.html"
    localStorage.setItem('addItem', JSON.stringify(cartArr));


}

const data = localStorage.getItem('addItem')
const cartArr = JSON.parse(data)
// console.log(cartArr);



const div = document.querySelector('#cart')
const totalAmounts = document.querySelector('.total-amount');


function renderCart() {
    let totalAmount = 0;
    totalAmount.innerHTML = ''
    if (cartArr.length > 0) {
        for (let i = 0; i < cartArr.length; i++) {
            totalAmount += cartArr[i].price * cartArr[i].quantity
            div.innerHTML += `<div class="container ">
            <img class="images" src="${cartArr[i].img}">
            <h3 class="brand" >${cartArr[i].brand} ${cartArr[i].model}</h3>
            <h3 class="price"><s>Price: ${cartArr[i].price}</s> </h3>
            <h3 class="price">Total Price: ${cartArr[i].price * cartArr[i].quantity}  </h3>
            <div class="quantity-div">
            <h3 class="quantity">Quantity : ${cartArr[i].quantity}</h3>
           <div class="">
           <button class="text-xl bg-sky-400 hover:bg-sky-600 text-white font-bold  rounded decrease-btn button" onclick="increaseQuantity(${i})">+</button>
           <button class="text-xl bg-sky-400 hover:bg-sky-600 text-white font-bold  rounded decrease-btn button"onclick="decreaseQuantity(${i})">-</button>
           </div>
            </div>
         
            <div class="cart-div">
            <button class="bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded " onclick="deleteItem(${i})">Delete</button>
            </div>
          
            </div>`
            totalAmounts.innerHTML = `<span>Total Amount</span> : ${totalAmount.toLocaleString()}`
        }
    } else {
        div.innerHTML = `  <h2>No item found</h2>`

    }

}

renderCart()

function deleteItem(index) {

    div.innerHTML = '';
    cartArr.splice(index, 1)
    renderCart()

}

function increaseQuantity(index) {

    div.innerHTML = ''
    cartArr[index].quantity += 1
    renderCart()

}


function decreaseQuantity(index) {

    div.innerHTML = '';
    cartArr[index].quantity -= 1
    renderCart()

    if (cartArr[index].quantity == 0) {
        div.innerHTML = '';
        cartArr.splice(index, 1)
        renderCart()

    }

}

window.onbeforeunload = function () {
    localStorage.setItem('addItem', JSON.stringify(cartArr));
};
