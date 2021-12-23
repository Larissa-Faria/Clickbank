/*molde para inserir nv cliente*/
class Cliente {
  /*atributos da classe*/
  nome;
  cpf;
}
/*Estrutura que desejamos que as contas-correntes tenham*/
class ContaCorrente {
  /*atributos da classe*/
  agencia;
  saldo;
  /*a função saque é propriedade do objeto contacorrente entao ela é um metodo*/
  saque(valor) {
    /*this é o sujeito no caso a ContaCorrente*/
    if (this.saldo >= valor) {
      this.saldo -= valor; //subtrai esse valor de saque do saldo da contaCorrente
    }
  }

  deposito(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }
}

const cliente1 = new Cliente(); //cria um novo obj no caso o cliente1
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente(); //cria um novo obj no caso o cliente2
cliente1.nome = "Ricardo";
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente(); //cria um novo obj no caso a contaCorrentericardo
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.deposito(100);
contaCorrenteRicardo.deposito(200);
contaCorrenteRicardo.deposito(-1);

contaCorrenteRicardo.saque(50);

console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);
