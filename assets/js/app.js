/*Javascript en el fronet, manipula el dom,  documento object mondel*/
/* el dom es la parte visual del navegador, todo el documento htl se considera como el dom*/
/* para acceder al dom siempre se debe de ingresar con let cualquierelmento = document;*/

/*let cualquierElemento = document;*/
/*En este caso se pondra document en la letra d*/
const d = document; //fredy creo esta variable para evitar copiar muchas veces document
//hay 3 selectores en JS, el primero ya va de salida
//que es seleccionar por clases 

//el primer a utilizar es getElementsByClassname, con este selector se puede acceder a las clases.
const contenedor = document.getElementsByClassName('container')


//Segunda forma de seleccionar elementos y esta seria por ID
//Se hace por getElementById ------ los id son elementos unicos y este getElement solo es de un elemento especifico.

const monitores = d.getElementById('monitores')
const carrito = d.getElementById ('carrito')

console.log(monitores)
console.log(carrito)


//Tercera forma, sintaxis o forma de seleccionar en JS y es la moderna.
//querySelector()
//const tarjeta = d.querySelector('.card')//se utiliza sintaxis de css en este ejemplo se esta buscando una card
const tarjeta = d.querySelector('#listado tbody')//buscame el listado y dentro del listado, busqueme tbody. podemos llegar a los elementos utilizando selectores independientes.
console.log(tarjeta)


//Ya que podemos seleccionar elementos, los podemos modificar tambien. 

let titulo = d.querySelector('header nav div h2').innerText; //de esta forma se selecciono el h2 y se guardo en titulo
//ahora lo vamos a cambiar
titulo = "Albert's Store"
console.log(titulo) 

let titulo2 = d.querySelector('main section h2').innerText;
titulo2 = "laptops" //el nombre portatiles se le cambio por laptops. 
console.log(titulo2) 

//de esta forma se cambia cualquier valor en la pagina de escritorio.
let titulo3 = d.querySelector('main h1');//esta es la ruta html 
titulo3.innerText = "Albert' Store"//esta es la nueva informacion que sale.


let titulo4 = d.querySelector('main h1').innerText; //Muestreme el texto interno
let titulo5 = d.querySelector('main h1').textContent; // el contenido de texto
let titulo6 = d.querySelector('main h1').innerHTML; // y el html.

console.log(titulo4);
console.log(titulo5);
console.log(titulo6);