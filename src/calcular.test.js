import {calcularneto,calculartotal} from "./calcular.js";
import impuestoEstado from "./impuesto.js";

describe("CALCULAR TOTAL", () => {
  it("MOSTRAR EL PRECIO NETO", () => {
    expect(calcularneto(3, 2)).toEqual(6);
  });
//impuesto y precio de CA
  it("MOSTRAR IMPUESTO Y PORCENTAJE DE CA ", () => {
    const impuestoCA=impuestoEstado("CA");
    const neto=calcularneto(100, 1);
    let {totalConDescuento,descuento}=calculartotal(neto,impuestoCA);
    expect(totalConDescuento).toEqual(108.25);
  });

  //impuesto y precio de TX
  it("MOSTRAR IMPUESTO Y PORCENTAJE DE TX ", () => {
    const impuestoCA=impuestoEstado("TX");
    const neto=calcularneto(100, 1);
    let {totalConDescuento,descuento}=calculartotal(neto,impuestoCA);
    expect(totalConDescuento).toEqual(106.25);
  });
   //impuesto y precio de AL
   it("MOSTRAR IMPUESTO Y PORCENTAJE DE AL ", () => {
    const impuestoCA=impuestoEstado("AL");
    const neto=calcularneto(100, 1);
    let {totalConDescuento,descuento}=calculartotal(neto,impuestoCA);
    expect(totalConDescuento).toEqual(104);
  });
    //impuesto y precio de NV
    it("MOSTRAR IMPUESTO Y PORCENTAJE DE NV ", () => {
      const impuestoCA=impuestoEstado("NV");
      const neto=calcularneto(100, 1);
      let {totalConDescuento,descuento}=calculartotal(neto,impuestoCA);
      expect(totalConDescuento).toEqual(108);
    });
      //impuesto y precio de UT
      it("MOSTRAR IMPUESTO Y PORCENTAJE DE UT ", () => {
        const impuestoCA=impuestoEstado("UT");
        const neto=calcularneto(100, 1);
        let {totalConDescuento,descuento}=calculartotal(neto,impuestoCA);
        expect(totalConDescuento).toEqual(106.65);
      });

      //impuesto, precio y descuento de > 1000
      it("MOSTRAR PRECIO TOTAL + IMPUESTO Y DESCUENTO DE > 1000 ", () => {
         let {totalConDescuento,descuento}=calculartotal(1000,8.25);
        expect(totalConDescuento).toEqual(1072.5);
      });
       //impuesto, precio y descuento de > 3000
       it("MOSTRAR PRECIO TOTAL + IMPUESTO Y DESCUENTO DE > 3000 ", () => {
        let {totalConDescuento,descuento}=calculartotal(3000,8.25);
       expect(totalConDescuento).toEqual(3187.5);
     });
       //impuesto, precio y descuento de > 7000
       it("MOSTRAR PRECIO TOTAL + IMPUESTO Y DESCUENTO DE > 7000 ", () => {
        let {totalConDescuento,descuento}=calculartotal(7000,8.25);
       expect(totalConDescuento).toEqual(7367.5);
     });



});
