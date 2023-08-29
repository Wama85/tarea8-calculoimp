import impuestoEstado from "./impuesto"
function calcularneto(a, b) {
  return a * b;
}

function calculartotal(total,impuesto) {
  
  return (total * impuesto/100)+total;
}

export {calcularneto,calculartotal};
