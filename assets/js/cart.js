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
    let productos ='<br><div class="text-left">'
    if(carro.length==0){
        Swal.fire({
            icon: 'error',
            title: 'Tu carrito está vacío',
            html: '<img src="/assets/img/emptycart.svg" height=200 width=200>'
        })
    } else {
        carro.forEach((items)=>{
            productos += `${items.item} \t$ ${items.precio}<br>`
            total += items.precio
        })
        let totalImprimir = total.toFixed(2)
        productos += `<br><br>Total: \t\t\t$ ${totalImprimir}`
        
        console.log(productos)
        Swal.fire({
            title: 'Elementos en tu Carrito:',
            html: `<pre>${productos}</pre>`,
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