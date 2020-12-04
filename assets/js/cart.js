let carro = []
const addToCartButtons = document.querySelectorAll('.addToCart')

addToCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCart)
})

function addToCart(event){
    const button = event.target
    const item = button.closest('.card-body')   
    const titulo = item.querySelector('.card-text').textContent
    const getPrecio = item.querySelector('.precio').textContent
    const precio = parseFloat(getPrecio, 2)
    carro.push({
        item: titulo,
        precio: precio
    })
    displayMessage()
    updateCart()
}

function displayCart(){
    let total= 0
    let productos ='<br>'
    if(carro.length==0){
        Swal.fire({
            icon: 'error',
            title: 'Tu carrito está vacío :(',
            text: 'Intenta agregar asombrosos productos de nuestro catálogo :D'
        })
    } else {
        carro.forEach((items)=>{
            productos += `${items.item}<br>$ ${items.precio}<br>`
            total += items.precio
        })
        productos += `<br>Total: $ ${total}`

        console.log(productos)
        Swal.fire({
            title: 'Elementos en tu Carrito:',
            html: productos,
            showCloseButton: true
        })
    }    
}

function displayMessage(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado al carrito!',
        showConfirmButton: false,
        timer: 1500
    })
}

function updateCart(){
    document.getElementById('counter').innerHTML = carro.length
}