const index = require("./index")

// const test = require("../aula1/scripts/scripts")


//test de soma
test("soma de dois valores!",()=>{
    expect(index.soma(5,5)).toBe(10)

});


//test subtração
test("subtração de dois valores!",()=>{
    expect(index.subtração(15,5)).toBe(10)

});


//test multiplicação
test("Teste multiplicação de dois valores", ()=>{
    expect(index.multiplicador(2,5)).toBe(10)
});


//test divisão
test("Teste divisão de dois valores", ()=>{
    expect(index.divisão(20,2)).toBe(10)
});


//test pessoa
test("retorno de pessoa", ()=>{
    expect(index.pessoa()).toEqual({
        id:1,
        nome:"Davi",
        idade:20
    })
});