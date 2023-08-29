import impuestoEstado from "./impuesto"
import {calcularneto,calculartotal} from "./calcular";

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
  let precioneto=calcularneto(firstNumber,secondNumber);
  impuesto=impuestoEstado(nombreestado);

  let {totalConDescuento,descuento,totalConImpuesto}=calculartotal(precioneto,impuesto);
  div.innerHTML = 
  "<p> CANTIDAD: " +firstNumber + "</p><p> PRECIO: "+ secondNumber + "</p>"+
  "<p>DESCUENTO: $ "+descuento+"</p>"+
  "<p> IMPUESTO: "+nombreestado +" "+impuesto +" % </p>"+
  "<p> PRECIO NETO ("+firstNumber+"*  $"+secondNumber+ "): $"+precioneto+"</p>"+
  "<p> PRECIO TOTAL + IMPUESTO ("+precioneto+"*  $"+impuesto+ "): $"+totalConImpuesto+"</p>"+
  "<p> PRECIO TOTAL (DESCUENTO E IMPUESTOS): $"+totalConDescuento+"</p>";

});



  