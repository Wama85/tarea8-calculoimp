import calcularprecio from "./calcular.js";

describe("CALCULAR TOTAL", () => {
  it("deberia calcular precio y cantidad", () => {
    expect(calcularprecio(3, 2)).toEqual(6);
  });
});
