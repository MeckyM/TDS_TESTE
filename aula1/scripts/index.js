const pessoa = require("./pessoa");

pessoa.cadastro('Davi',20);
pessoa.cadastro('Adriel',18);
pessoa.cadastro('Guilherme',27);
pessoa.cadastro('Julia',17);

console.log(pessoa.consulta());

pessoa.deleta(3);

console.log(pessoa.consulta());

console.log(pessoa.consultaPessoaID(4));