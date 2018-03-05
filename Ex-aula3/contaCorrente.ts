class ContaCorrente {
  saldo: number

  constructor(saldo:number){
    this.saldo = saldo
  }
  saque(valorSaque: number){

    if (this.saldo - valorSaque >= 0 ) {
      this.saldo = this.saldo - valorSaque
      console.log("Saque com sucesso");
    } else {
      console.log("Saldo esta negativo!");
    }
  }
}

interface excecao{
  limite : number
}

export{ContaCorrente,excecao}
