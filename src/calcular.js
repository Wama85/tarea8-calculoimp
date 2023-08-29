import impuestoEstado from "./impuesto"
function calcularneto(a, b) {
  return a * b;
}

function calculartotal(total,impuesto) {
  let descuento=0;
  
  if ((total>=1000) && (total<3000)){
    descuento=total*0.01;

    return{
      totalConDescuento:((total * impuesto/100)+total)-descuento,
      descuento:descuento,
   }; 
  }

return {
  totalConDescuento: (total * impuesto/100)+total,
  descuento:0,
};
  
}

export {calcularneto,calculartotal};
