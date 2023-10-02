const div = document.querySelector('#card');

const phones = [
    {
        brand: 'Samsung',
        img: "./assets/note 20.webp",
        model: 'Note 20',
        ram: 12,
        rom: 256,
        camera: '20 megapixel',
        price: 139999,
    },
    {
        brand: 'Samsung',
        img: "./assets/a 53.webp",
        model: 'A53',
        ram: 8,
        rom: 128,
        camera: '20 megapixel',
        price: 156999,
    },
    {
        brand: 'Samsung',
        img: "./assets/a04.webp",
        model: 'A04',
        ram: 12,
        rom: 512,
        camera: '20 megapixel',
        price: 122999,
    },
    {
        brand: 'Samsung',
        img: "./assets/a24.webp",
        model: 'A24',
        ram: 4,
        rom: 64,
        camera: '20 megapixel',
        price: 111999,
    },
    {
        brand: 'Samsung',
        img: "./assets/s22.webp",
        model: 'S22',
        ram: 12,
        rom: 256,
        camera: '20 megapixel',
        price: 138999,
    },
    {
        brand: 'Samsung',
        img: "./assets/a23.webp",
        model: 'S23 ultra',
        ram: 8,
        rom: 128,
        camera: '20 megapixel',
        price: 145999,
    },
    {
        brand: 'Samsung',
        img: "./assets/note 10.webp",
        model: 'Note 10',
        ram: 4,
        rom: 64,
        camera: '20 megapixel',
        price: 121999,
    },
    {
        brand: 'Samsung',
        img: "./assets/f13.webp",
        model: 'F13',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 189999,
    },
    {
        brand: 'Samsung',
        img: "./assets/a34.webp",
        model: 'A34',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 189999,
    },
    {
        brand: 'Samsung',
        img: "./assets/a73.webp",
        model: 'A73',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 189999,
    },
    {
        brand: 'Samsung',
        img: "./assets/fold.webp",
        model: 'Galaxy Z Flip 4',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 189999,
    },
    {
        brand: 'Samsung',
        img: "./assets/a13.webp",
        model: 'A13',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 189999,
    },

]

for (let i = 0; i < phones.length; i++) {
    div.innerHTML += `<div class="container">
    <img class="images" src="${phones[i].img}">
    <h3 >${phones[i].brand} ${phones[i].model}</h3>
    <h3 >Memory: ${phones[i].ram}/${phones[i].rom}</h3>
    
   
    <h3 class="price">Price: ${phones[i].price} </h3>
    <button class="bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded " onclick="cartButton(${i})">Add to cart</button>

    </div>`
  


}

let cartArr = []

function cartButton(index) {

    if (cartArr.includes(phones[index])) {
        for (let i = 0; i < cartArr.length; i++) {
            if (cartArr[i] === phones[index]) {
                cartArr[i].quantity += 1 
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item Again Added To Cart',
                    showConfirmButton: false,
                    timer: 1500
                })

            }

        }

    } else {
        phones[index].quantity = 1
        cartArr.push(phones[index]);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item Added To Cart',
            showConfirmButton: false,
            timer: 1500
        })
    }
    console.log(cartArr);

}


function goToCart() {
    window.location = "./cart.html"
    const addArry = JSON.stringify(cartArr)
    localStorage.setItem('addItem', addArry)
}








