const URL_QUESOS = '../data/quesos.json'
const URL_OTROS = '../data/otros.json'
const URL_LECHE = '../data/leche.json'
const URL_YOGURT = '../data/yogurt.json'

const URL_CARRITO = '../data/cart.json'

let my_init = {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json'
    },
    mode: 'cors',
    cache: 'default'
}

let request_quesos = new Request(URL_QUESOS, my_init)
let request_otros = new Request(URL_OTROS, my_init)
let request_leche = new Request (URL_LECHE, my_init)
let request_yogurt = new Request(URL_YOGURT, my_init) 

//cart
function getCart(){

    let table = document.getElementById('cartItems')

    fetch(URL_CARRITO)
    .then((resp) => resp.json())
}

function fillProducts(){
    let items = document.getElementById('productos')
    fetch(URL_QUESOS)
    .then(response => response.json())
    .then(json => console.log(json))
}

fillProducts()