import {calcularneto,calculartotal} from "./calcular.js";
import impuestoEstado from "./impuesto.js";

describe("CALCULAR TOTAL", () => {
  it("MOSTRAR EL PRECIO NETO", () => {
    expect(calcularneto(3, 2)).toEqual(6);
  });
  
  it("MOSTRAR IMPUESTO Y PORCENTAJE DE CA ", () => {
    const impuestoCA=impuestoEstado("CA");
    const neto=calcularneto(100, 1);
    let total=calculartotal(neto,impuestoCA);
    expect(total).toEqual(108.25);
  });
});
