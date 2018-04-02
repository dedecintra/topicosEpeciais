import {ContaCorrente,excecao} from './contaCorrente'

export class ContaEspecial extends ContaCorrente implements excecao {
  limite: number
  constructor(){
    super (100)
    this.limite = 100
  }
  saque(valorSaque:number){
    if (this.saldo - valorSaque + this.limite >= 0 ) {
      this.saldo = this.saldo - valorSaque
      console.log("Saque com sucesso");
    } else {
      console.log("Saldo esta negativo!");
    }
  }
}
