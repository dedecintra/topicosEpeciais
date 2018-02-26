function useTheForce(name) {
    console.log("Use the force, " + name);
}
useTheForce("GAbriel ");
var zoeira = function (parsecs) {
    return parsecs < 12;
};
console.log(zoeira(33));
var call;
call = function (name) { return console.log("Do you copy, " + name + " ? "); };
call("R2");
function inc1(speed, inc) {
    return speed + inc;
}
console.log(inc1(5, 1));
function inc2(speed, inc) {
    var i = inc || 1;
    return speed + i;
}
console.log(inc2(5, 4));
console.log(inc2(5));
function inc3(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log(inc3(5, 5));
console.log(inc3(5));
function countJedis(jedis) {
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
function countJedis2() {
    var jedis = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        jedis[_i] = arguments[_i];
    }
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
console.log("Contando " + countJedis([5, 6, 7, 8, 9]));
console.log("Contando " + countJedis([]));
console.log("Contando " + countJedis2(4, 3, 2, 1, 2, 3));
