function back() {
    window.location = "index.html"


}

const data = localStorage.getItem('addItem')
const cartArr = JSON.parse(data)
console.log(cartArr);



const div = document.querySelector('#cart')

function renderCart() {
    for (let i = 0; i < cartArr.length; i++) {
        div.innerHTML += `<div class="border-2 p-[30px] ">
        <h2 class="brand"> ${cartArr[i].brand}</h2>
        <img class="w-[200px]" src="${cartArr[i].img}">
        <h3 class="model">Model: ${cartArr[i].model}</h3>
        <h3 class="ram">Ram: ${cartArr[i].ram}</h3>
        <h3 class="rom">Rom: ${cartArr[i].rom}</h3>
        <h3 class="camera">Camera: ${cartArr[i].camera}</h3>
        <h3 class="price">Price: ${cartArr[i].price} </h3>
        <h3 class="quantity">Quantity: ${cartArr[i].quantity}</h3>
        <h3 class="price">Total Price: ${cartArr[i].price * cartArr[i].quantity}  </h3>
        <button onclick="deleteItem(${i})">Delete</button>
        <button onclick="increaseQuantity(${i})">+</button>
        <button onclick="decreaseQuantity(${i})">-</button>
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



// function back() {
//     window.location = 'index.html'
// }


// const data = localStorage.getItem('addItem');
// const cartArr = JSON.parse(data);
// console.log(cartArr);

// const div = document.querySelector('#cart');


// function renderCart() {
//     for (let i = 0; i < cartArr.length; i++) {
//         div.innerHTML += `
//         <div class="p-[2rem] border-black-200 border-solid border-2 rounded-lg drop-shadow-2xl mt-5">
//                 <p><span class="font-bold text-lg">brand:</span> ${cartArr[i].brand}</p>
//                 <p><span class="font-bold text-lg">Model:</span> ${cartArr[i].model}</p>
//                 <p><span class="font-bold text-lg">Quantity:</span> ${cartArr[i].quantity}</p>
//                 <p><span class="font-bold text-lg">Price:</span> ${cartArr[i].price}</p>
//                 <p><span class="font-bold text-lg">Total Price:</span> ${cartArr[i].price * cartArr[i].quantity}</p>
//                 <button class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="increaseQuantity(${i})">+</button>
//                 <span>${cartArr[i].quantity}</span>
//                 <button class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="decreaseQuantity(${i})">-</button> <br/>
//                 <button  class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="deleteItem(${i})">Delete</button>
//         </div>
//         `
//     }
// }

// renderCart()

// function increaseQuantity (index){
//     div.innerHTML = ''
//     console.log(cartArr[index])
//     cartArr[index].quantity += 1
//     renderCart()
// }
// function decreaseQuantity (index){
//     div.innerHTML = ''
//     console.log(cartArr[index])
//     cartArr[index].quantity -= 1
//     renderCart()
//     if(cartArr[index].quantity === 0){
//         div.innerHTML = ''
//         cartArr.splice(index , 1)
//         renderCart()
//     }
// }


// function deleteItem(index){
//     div.innerHTML = '';
//     cartArr.splice(index , 1);
//     renderCart()
// }
