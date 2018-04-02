import {ContaCorrente,excecao} from './contaCorrente'
import {ContaEspecial} from './contaespecial'

let conta1 = new ContaCorrente(10);
conta1.saque(4);

let conta2 = new ContaEspecial();
conta2.saque(20);

let metodo = (conta : ContaEspecial) => conta.limite > 80

console.log(`Limite maior que 80? ${metodo(conta2) ? 'Sim' : 'Não'}`)
