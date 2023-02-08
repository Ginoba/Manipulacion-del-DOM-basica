//querySelector sirve para llamar una etiqueta, clase, id del 
//HTML, llamandolos de la forma en que se estilizaran en CSS.


const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName(".parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
})

//innerHTML sirve para modificar el 
//html desde javascript, el innerText 
//solo traduce a texto.

h1.innerHTML = "Patito <br> Feo";    
h1.innerText = "Patito <br> Feo";
// console.log(h1.getAttribute("class"));
// h1.setAttribute("class", "rojo");

//classList sirve para modificar la clase de una etiqueta HTML, 
//agregarle otra, eliminar una, etc.

h1.classList.add("rojo", "azul");
h1.classList.remove("azul")

//document.createElement lo que hace es crear una etiqueta
//desde js al HTML.

const img = document.createElement("img")
img.setAttribute("src", "https://i.pinimg.com/originals/39/20/47/392047706e432bf98ef632483dacc710.jpg")

//append es un argumento para colocar 

//El método Elemento.append() inserta un conjunto de objetos 
//de Nodo u objetos de cadena después del último hijo del 
//Elemento. Los objetos de cadena se insertan como nodos 
//de texto equivalentes

pid.append(img)

