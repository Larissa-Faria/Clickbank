
import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente(); //cria um novo obj no caso o cliente1
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente(); //cria um novo obj no caso o cliente2
cliente1.nome = "Ricardo";
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente(); //cria um novo obj no caso a contaCorrentericardo
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.deposito(100);
let valorSacado = contaCorrenteRicardo.saque(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);
