"use strict";
exports.__esModule = true;
var contaCorrente_1 = require("./contaCorrente");
var contaespecial_1 = require("./contaespecial");
var conta1 = new contaCorrente_1.ContaCorrente(10);
conta1.saque(4);
var conta2 = new contaespecial_1.ContaEspecial();
conta2.saque(20);
var metodo = function (conta) { return conta.limite > 80; };
console.log("Limite maior que 80? " + (metodo(conta2) ? 'Sim' : 'Não'));
