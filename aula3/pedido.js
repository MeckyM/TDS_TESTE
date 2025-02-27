//id, nome, idade
const pedido = [];
var idSeg = 1;

function cadastro(id_produto, id_cliente, quantidade, total) {
    var pedid = {id: idSeg++, id_produto, id_cliente, quantidade, total};
    pedido.push(pedid);
    return pedid;
}

function consulta(){
    return pedido;
}

function deleta(id) {

    var teveRetorno = true;
    for (let i = 0; i < pedido.length; i++) {
        if (pedido[i].id == id) {
            pedido.splice(i, 1);
            return "Pedido deletado com sucesso!";
        } else {
            teveRetorno = false;
        }
    }

    if (!teveRetorno) {
        return "Código do pedido é inválido!";
    }
}

function consultaPedidoID(id) {
    return pessoas.filter(item => item.id == id);
}

function atualizaPedido(id, id_produto, id_cliente, quantidade, total) {

    var teveRetorno = true;
    for (let i = 0; i < pedido.length; i++) {
        if (pedido[i].id == id) {
            pedido[i].id_produto = id_produto;
            pedido[i].id_cliente= id_cliente;
            pedido[i].quantidade = quantidade;
            pedido[i].total = total;
            return pedido[i];
        } else {
            teveRetorno = false;
        }
    }

    if (!teveRetorno) {
        return "O código do pedido é inválido!";
    }

}

module.exports = {
    cadastro,
    consulta,
    deleta,
    consultaPedidoID,
    atualizaPedido
}