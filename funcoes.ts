function useTheForce(name: string):void{
  console.log("Use the force, " + name)
}

useTheForce("GAbriel ")

let zoeira = function (parsecs: number):boolean{
  return parsecs < 12
}

console.log(zoeira(33))

let call: (name:string) => void

call = name => console.log("Do you copy, " + name + " ? " )

call("R2")

function inc1 (speed: number, inc: number): number{
  return speed + inc
}

console.log(inc1(5,1))

function inc2 (speed: number, inc?: number): number{
  let i = inc || 1
  return speed + i
}

console.log(inc2(5,4))
console.log(inc2(5))

function inc3 (speed: number, inc:number = 1): number{
  return speed + inc
}

console.log(inc3(5,5))
console.log(inc3(5))


function countJedis(jedis: number[]): number{
  return jedis.reduce((a,b) => a + b, 0)
}

function countJedis2(...jedis: number[]): number{
  return jedis.reduce((a,b) => a + b, 0)
}


console.log("Contando " + countJedis([5,6,7,8,9]))

console.log("Contando " + countJedis([]))

console.log("Contando " + countJedis2(4,3,2,1,2,3))
