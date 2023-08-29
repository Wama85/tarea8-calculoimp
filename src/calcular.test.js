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
    let total=calculartotal(neto,impuestoCA);
    expect(total).toEqual(108.25);
  });

  //impuesto y precio de TX
  it("MOSTRAR IMPUESTO Y PORCENTAJE DE TX ", () => {
    const impuestoCA=impuestoEstado("TX");
    const neto=calcularneto(100, 1);
    let total=calculartotal(neto,impuestoCA);
    expect(total).toEqual(106.25);
  });
   //impuesto y precio de AL
   it("MOSTRAR IMPUESTO Y PORCENTAJE DE AL ", () => {
    const impuestoCA=impuestoEstado("AL");
    const neto=calcularneto(100, 1);
    let total=calculartotal(neto,impuestoCA);
    expect(total).toEqual(104);
  });
    //impuesto y precio de NV
    it("MOSTRAR IMPUESTO Y PORCENTAJE DE NV ", () => {
      const impuestoCA=impuestoEstado("NV");
      const neto=calcularneto(100, 1);
      let total=calculartotal(neto,impuestoCA);
      expect(total).toEqual(108);
    });
      //impuesto y precio de UT
      it("MOSTRAR IMPUESTO Y PORCENTAJE DE UT ", () => {
        const impuestoCA=impuestoEstado("UT");
        const neto=calcularneto(100, 1);
        let total=calculartotal(neto,impuestoCA);
        expect(total).toEqual(106.65);
      });



});
