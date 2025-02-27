//id, nome, idade
const cliente = [];
var idSeg = 1;

function cadastro(nome, cpf) {
    var pessoa = {id: idSeg++, nome, cpf};
    cliente.push(pessoa);
    return pessoa;
}

function consulta(){
    return cliente;
}

function deleta(id) {

    var teveRetorno = true;
    for (let i = 0; i < cliente.length; i++) {
        if (cliente[i].id == id) {
            cliente.splice(i, 1);
            return "cliente deletada com sucesso!";
        } else {
            teveRetorno = false;
        }
    }

    if (!teveRetorno) {
        return "Código do cliente é inválido!";
    }
}

function consultaclienteID(id) {
    return cliente.filter(item => item.id == id);
}

function atualizacliente(id, nome, cpf) {

    var teveRetorno = true;
    for (let i = 0; i < cliente.length; i++) {
        if (cliente[i].id == id) {
            cliente[i].nome = nome;
            cliente[i].cpf = cpf;
            return cliente[i];
        } else {
            teveRetorno = false;
        }
    }

    if (!teveRetorno) {
        return "O código do cliente é inválido!";
    }
}

module.exports = {
    cadastro,
    consulta,
    deleta,
    consultaclienteID,
    atualizacliente
}