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

function deleta(id) {

    var teveRetorno = true;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id == id) {
            pessoas.splice(i, 1);
            return "Pessoa deletada com sucesso!";
        } else {
            teveRetorno = false;
        }
    }

    if (!teveRetorno) {
        return "Código da pessoa é inválido!";
    }
}

function consultaPessoaID(id) {
    return pessoas.filter(item => item.id == id);
}

function atualizaPessoa(id, nome, idade) {

}

module.exports = {
    cadastro,
    consulta,
    deleta,
    consultaPessoaID
}
