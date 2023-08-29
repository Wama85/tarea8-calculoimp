function impuestoEstado(nombreestado){
   let impuesto;
   if(nombreestado ==="CA"){
      impuesto=8.25;
      return impuesto;
   }
   if(nombreestado ==="NV"){
       impuesto=8;
       return impuesto;
   }
   if(nombreestado ==="TX"){
       impuesto=6.25;
       return impuesto;
   }
   if(nombreestado ==="AL"){
       impuesto=4.00;
       return impuesto;
   }
   if(nombreestado ==="UT"){
       impuesto=6.65;
       return impuesto;
   }
}

export default impuestoEstado;
