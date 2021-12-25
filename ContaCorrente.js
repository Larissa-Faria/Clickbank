/*Estrutura que desejamos que as contas-correntes tenham*/
export class ContaCorrente {
  /*atributos da classe*/
  agencia;
  cliente;
  _saldo = 0;
  /*a função saque é propriedade do objeto contacorrente entao ela é um metodo*/

  saque(valor) {
    /*this é o sujeito (ContaCorrente)*/
    if (this._saldo >= valor) {
      this._saldo -= valor; //subtrai esse valor de saque do saldo da contaCorrente
      return valor; //para a execução do metodo ter a visao do saldo
    }
  }

  deposito(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }

  transferencia(valor, conta) {
    const valorSacado = this.saque(valor);
    conta.deposito(valorSacado);
  }

  function totalDeContas(0) {
      ContaCorrente.totalDeContas += 1;
  }
}
for (let i = 0; i < array.length; i++) {
    const ContaCorrente = array[i];
    
}
