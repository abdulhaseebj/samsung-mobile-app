const div = document.querySelector('#card');

const phones = [
    {
        brand: 'Samsung',
        img: "./assets/note 20.png",
        model: 'Note 20',
        ram: 12,
        rom: 256,
        camera: '20 megapixel',
        price: 139999,
    },
    {
        brand: 'Samsung',
        img: "./assets/download-removebg-preview.png",
        model: 'A53',
        ram: 8,
        rom: 128,
        camera: '20 megapixel',
        price: 156999,
    },
    {
        brand: 'Samsung',
        img: "./assets/ao4-removebg-preview.png",
        model: 'A04',
        ram: 12,
        rom: 512,
        camera: '20 megapixel',
        price: 122999,
    },
    {
        brand: 'Samsung',
        img: "./assets/a24-removebg-preview.png",
        model: 'A24',
        ram: 4,
        rom: 64,
        camera: '20 megapixel',
        price: 111999,
    },
    {
        brand: 'Samsung',
        img: "./assets/s22-removebg-preview.png",
        model: 'S22',
        ram: 12,
        rom: 256,
        camera: '20 megapixel',
        price: 138999,
    },
    {
        brand: 'Samsung',
        img: "./assets/s23ultra-removebg-preview.png",
        model: 'S23 ultra',
        ram: 8,
        rom: 128,
        camera: '20 megapixel',
        price: 145999,
    },
    {
        brand: 'Samsung',
        img: "./assets/note_10-removebg-preview.png",
        model: 'Note 10',
        ram: 4,
        rom: 64,
        camera: '20 megapixel',
        price: 121999,
    },
    {
        brand: 'Samsung',
        img: "./assets/f13-removebg-preview.png",
        model: 'F13',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 189999,
    },

]

for (let i = 0; i < phones.length; i++) {
    div.innerHTML += `<div class="border-2 p-[30px]">
    <h2 class="brand"> ${phones[i].brand}</h2>
    <img class="w-[200px]" src="${phones[i].img}">
    <h3 class="model">Model: ${phones[i].model}</h3>
    <h3 class="ram">Ram: ${phones[i].ram}</h3>
    <h3 class="rom">Rom: ${phones[i].rom}</h3>
    <h3 class="camera">Camera: ${phones[i].camera}</h3>
    <h3 class="price">Price: ${phones[i].price} </h3>
    <button class=" bg-[#38bdf8] py-[10px] pr-[70px] pl-[10px] rounded-xl text-xl font-black text-white hover:bg-[#3882f8]"onclick="cartButton(${i})">Add to cart</button>

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
                    title: 'Item selected',
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
            title: 'Item selected',
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








