const produto = require("./produto");
const cliente = require("./clientes");
const pedido = require("./pedido");


//produto
test("Cadastro de produto",()=>{
    expect(produto.cadastro("Ovo", 20)).toEqual({ id : 1, nome: "Ovo", preco: 20})
});


test("Consulta todos os produtos", ()=>{
    expect(produto.consulta()).toEqual([{ id : 1, nome: "Ovo", preco: 20}])
});

test("Deleta todos os produtos",()=>{
    const retorno = produto.deleta(1)
    expect(retorno).toBe("produto deletado com sucesso!")
});

//cliente
// test("cadastro de produto",()=>{
//     expect(produto.cadastro("Ovo", 20)).toEqual({ id : 1, nome: "Ovo", preco: 20});
// })





// //pedido
// test("cadastro de produto",()=>{
//     expect(produto.cadastro("Ovo", 20)).toEqual({ id : 1, nome: "Ovo", preco: 20});
// })