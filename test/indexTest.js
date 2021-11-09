describe("index.js", () => {
  it("animalFavorito es igual al string 'perro'", () => {
    //expect(sayHello()).to.deep.eq("hello");
    expect(animalFavorito).to.deep.equal("perro");
  });

  it("edad es igual al numero 18", () => {
    expect(edad).to.equal(18);
  });

  //   it("suma() regresa la suma de 2 numeros dados", () => {
  //     expect(suma(2, 3)).to.deep.eq(5);
  //   });
});
