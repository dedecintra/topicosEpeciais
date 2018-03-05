let isEnoughToBeatMF = function(parsecs: number): boolean{
  return parsecs < 12
}

let distance = 14
console.log(`Is ${distance} parsecs enough to beat MF? ${isEnoughToBeatMF(distance) ? 'Sim': 'Não'} `)

let funcao = (name: String) => console.log(`Do you copy, ${name} ?`)

funcao('R2')

function inc (speed: number, inc: number = 1): number{
  return speed + inc
}

console.log(`inc10(5,1) = ${inc(5,1)}`)

console.log(`inc(5) = ${inc(5)}`)
