

const first = document.querySelector("#cantidad-numero");

const calculo = document.querySelector("#calcular-button");
const div = document.querySelector("#resultado-div");

div.style.display="none";

calculo.addEventListener("click", (event) => {
  event.preventDefault();

  div.style.display="block";
  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p> CANTIDAD: " +firstNumber+ "</p>";

});
