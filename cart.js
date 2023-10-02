function back() {
    window.location = "index.html"


}

const data = localStorage.getItem('addItem')
const cartArr = JSON.parse(data)
console.log(cartArr);



const div = document.querySelector('#cart')

function renderCart() {
    for (let i = 0; i < cartArr.length; i++) {
        div.innerHTML += `<div class="container ">
       
        <img class="images" src="${cartArr[i].img}">
        <h3 class="model">Model: ${cartArr[i].model}</h3>
       
        <h3 class="price">Price: ${cartArr[i].price} </h3>
        <h3 class="quantity">Quantity: ${cartArr[i].quantity}</h3>
        <h3 class="price">Total Price: ${cartArr[i].price * cartArr[i].quantity}  </h3>
        <button class="bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded " onclick="deleteItem(${i})">Delete</button>
        <button class="bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded " onclick="increaseQuantity(${i})">+</button>
        <button class="bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded " onclick="decreaseQuantity(${i})">-</button>
        </div>`

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
