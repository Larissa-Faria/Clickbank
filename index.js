import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente(); //cria um novo obj no caso o cliente1
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente(); //cria um novo obj no caso o cliente2
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente(); //cria um novo obj no caso a contaCorrentericardo
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.deposito(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 103;

contaCorrenteRicardo.transferencia(200, conta2);

console.log(conta2);
console.log(contaCorrenteRicardo);
