import yogurt from '../data/yogurt.js'
import leche from '../data/leche.js'
import otros from '../data/otros.js'
import quesos from '../data/quesos.js'


const ID_QUESO = 'qtabla'
const ID_OTRO = 'otabla'
const ID_LECHE = 'ltabla'
const ID_YOGURT = 'ytabla'



function fillCatalog(array, id){
    //Llenando quesos
    let productos =  document.getElementById(id)

    for (let i = 0; i < array.length; i++) {
       
        let elemento =  `<div class="col mt-3">
                        <img src="${array[i].url}" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text text-muted"> ${array[i].name}</p>
                            <h5 class="card-title ">$ <div class="precio d-inline">${parseFloat(array[i].price).toFixed(2)}</div></h5>
                            <div class="text-center mt-4">
                                <button class="btn btn-warning btn-sm shadow addToCart">Añadir al carro</button>
                            </div>
                        </div>
                    </div>`
        productos.innerHTML += elemento
        
    }
}


fillCatalog(quesos, ID_QUESO)
fillCatalog(leche, ID_LECHE)
fillCatalog(yogurt, ID_YOGURT)
fillCatalog(otros, ID_OTRO)