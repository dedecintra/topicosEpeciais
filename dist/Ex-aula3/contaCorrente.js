"use strict";
exports.__esModule = true;
var ContaCorrente = /** @class */ (function () {
    function ContaCorrente(saldo) {
        this.saldo = saldo;
    }
    ContaCorrente.prototype.saque = function (valorSaque) {
        if (this.saldo - valorSaque >= 0) {
            this.saldo = this.saldo - valorSaque;
            console.log("Saque com sucesso");
        }
        else {
            console.log("Saldo esta negativo!");
        }
    };
    return ContaCorrente;
}());
exports.ContaCorrente = ContaCorrente;
