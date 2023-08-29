import calcularprecio from "./calcular.js";

describe("CALCULAR TOTAL", () => {
  it("MOSTRAR EL PRECIO NETO", () => {
    expect(calcularprecio(3, 2)).toEqual(6);
  });
});
