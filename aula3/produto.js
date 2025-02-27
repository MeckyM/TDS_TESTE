//id, nome, idade
const produto = [];
var idSeg = 1;

function cadastro(nome, preco) {
    var produ = {id: idSeg++, nome, preco};
    produto.push(produ);
    return produ;
}

function consulta(){
    return produto;
}

function deleta(id) {

    var teveRetorno = true;
    for (let i = 0; i < produto.length; i++) {
        if (produto[i].id == id) {
            produto.splice(i, 1);
            return "produto deletado com sucesso!";
        } else {
            teveRetorno = false;
        }
    }

    if (!teveRetorno) {
        return "Código do produto é inválido!";
    }
}

function consultaProdutoID(id) {
    return produto.filter(item => item.id == id);
}

function atualizaProduto(id, nome, preço) {

    var teveRetorno = true;
    for (let i = 0; i < produto.length; i++) {
        if (produto[i].id == id) {
            produto[i].nome = nome;
            produto[i].preço = preço;
            return produto[i];
        } else {
            teveRetorno = false;
        }
    }

    if (!teveRetorno) {
        return "O código do produto é inválido!";
    }

}

module.exports = {
    cadastro,
    consulta,
    deleta,
    consultaProdutoID,
    atualizaProduto
}