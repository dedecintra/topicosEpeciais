import {ContaCorrente,excecao} from './contaCorrente'
import {ContaEspecial} from './contaespecial'

let conta1 = new ContaCorrente(30);
conta1.saque(10);

let conta2 = new ContaEspecial();
conta2.saque(20);
