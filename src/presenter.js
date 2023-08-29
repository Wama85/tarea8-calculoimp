import impuestoEstado from "./impuesto"

const first = document.querySelector("#txtcantidad");
const second = document.querySelector("#txtprecio");
const calculo = document.querySelector("#btncalcular");
const div = document.querySelector("#resultado-div");
const selecestado=document.querySelector("#slcestado");

div.style.display="none";
let impuesto=0;

calculo.addEventListener("click", (event) => {
  event.preventDefault();
  div.style.display="block";

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const nombreestado=selecestado.value;
 
  impuesto=impuestoEstado(nombreestado);
  div.innerHTML = 
  "<p> CANTIDAD: " +firstNumber + "</p><p> PRECIO: "+ secondNumber + "</p>"+
  "<p> IMPUESTO: "+nombreestado +" "+impuesto +" % </p>";

});



  