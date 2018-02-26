var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat MF? " + (isEnoughToBeatMF(distance) ? 'Sim' : 'Não') + " ");
var funcao = function (name) { return console.log("Do you copy, " + name + " ?"); };
funcao('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc10(5,1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));
