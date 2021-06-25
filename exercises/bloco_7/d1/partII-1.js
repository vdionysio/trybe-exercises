const fatorial = x => x === 1 ? x : x * fatorial(x - 1);

console.log(fatorial(4));