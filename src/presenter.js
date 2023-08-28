
const first = document.querySelector("#txtcantidad");
const second = document.querySelector("#txtprecio");
const calculo = document.querySelector("#btncalcular");
const div = document.querySelector("#resultado-div");
const slcestado=document.querySelector("#slcestado");

div.style.display="none";

calculo.addEventListener("click", (event) => {
  event.preventDefault();

  div.style.display="block";
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const nombreestado=slcestado.value;
  div.innerHTML = "<p> CANTIDAD: " +firstNumber + " PRECIO: "+ secondNumber + "</p>"+
  "<p> Seleccionaste el estado de: "+nombreestado+"</p>";

});
