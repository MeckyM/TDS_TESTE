//id, nome, idade
const pessoas = [];
var idSeg = 1;

function cadastro(nome, idade) {
    var pessoa = {id: idSeg++, nome, idade};
    pessoas.push(pessoa);
    return pessoa;
}

function consulta(){
    return pessoas;
}

module.exports = {
    cadastro,
    consulta
}
