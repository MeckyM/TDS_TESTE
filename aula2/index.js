//soma
function soma(a, b) {
    return a + b
}
console.log(soma(5, 5));

//<-----------------------------------------------------------------------------------

//subtração de dois valores
function subtração(a, b) {
    return a - b;
}
    console.log("A subtração é:", subtração(20,2));

//<-----------------------------------------------------------------------------------

//multiplicação
function multiplicador(a, b) {
    return a * b;
}
    console.log("O multiplo é:", multiplicador(2,5));

//<-----------------------------------------------------------------------------------

//Divisão de dois valores
function divisão(a, b) {
    return a / b;
}
    console.log("A divisão é:", divisão(20,2));

//<-----------------------------------------------------------------------------------

//função que retorna uma pessoa
function pessoa(){
    return{
        id:1,
        nome:"Davi",
        idade:20
    }
}

//<-----------------------------------------------------------------------------------

module.exports = {
    soma,
    subtração,
    multiplicador,
    divisão,
    pessoa
}