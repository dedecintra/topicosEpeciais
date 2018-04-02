"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var contaCorrente_1 = require("./contaCorrente");
var ContaEspecial = /** @class */ (function (_super) {
    __extends(ContaEspecial, _super);
    function ContaEspecial() {
        var _this = _super.call(this, 100) || this;
        _this.limite = 100;
        return _this;
    }
    ContaEspecial.prototype.saque = function (valorSaque) {
        if (this.saldo - valorSaque + this.limite >= 0) {
            this.saldo = this.saldo - valorSaque;
            console.log("Saque com sucesso");
        }
        else {
            console.log("Saldo esta negativo!");
        }
    };
    return ContaEspecial;
}(contaCorrente_1.ContaCorrente));
exports.ContaEspecial = ContaEspecial;
