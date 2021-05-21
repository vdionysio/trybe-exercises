/*
1-Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
*/

let n = 5;

for (let i = 0; i < n; i += 1) {
  console.log('*'.repeat(n));
}

/*
2-Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
*/
console.log('\n');

n = 5;

for (let i = n - 1; i >= 0; i -= 1) {
    console.log('*'.repeat(n-i));
}

/*
3-Agora inverta o lado do triângulo.
*/
console.log('\n');
n = 8;

for (let i = n - 1; i >= 0; i -= 1) {
    console.log(' '.repeat(i) + '*'.repeat(n-i));
}

/*
4-Depois, faça uma pirâmide com n asteriscos de base
*/
console.log('\n');

n = 5;

for (let i = n - 1; i >= 0; i -= 1) {
  if ((n-i) % 2 !== 0) {
    console.log(' '.repeat(i/2) + '*'.repeat(n-i) + ' '.repeat(i/2));
  }
}

/*
5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
*/
console.log('\n');

n = 5;

for (let i = n - 1; i >= 0; i -= 1) {
  if (i === n - 1) {
    console.log(' '.repeat(i/2) + '*'.repeat(n-i) + ' '.repeat(i/2));
  }
  else if (i === 0) {
    console.log('*'.repeat(n));
  }
  else {
    console.log(' '.repeat(Math.floor(i/2)) + '*' + ' '.repeat(i - 2*Math.floor(i/2)) + '*' + ' '.repeat(Math.floor(i/2)));
  }
}
