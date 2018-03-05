"use strict";
exports.__esModule = true;
var contaCorrente_1 = require("./contaCorrente");
var contaespecial_1 = require("./contaespecial");
var conta1 = new contaCorrente_1.ContaCorrente(30);
conta1.saque(10);
var conta2 = new contaespecial_1.ContaEspecial();
conta2.saque(20);
