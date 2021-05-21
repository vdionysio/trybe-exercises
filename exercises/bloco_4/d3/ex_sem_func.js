/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . */

let n = 5;
let line = '';
let symbol = '*';

for (let i = 0; i < n; i += 1) {
  line += symbol;
}

for (let i = 0; i < n; i += 1) {
  console.log(line); 
}

/*2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. */
console.log('\n');

n = 5;
line = '';
symbol = '*';

for (let i = 0; i < n; i += 1) {
  line += symbol;
  console.log(line);
}

/*3-Agora inverta o lado do triângulo */
console.log('\n');

n = 5;
line = '';
symbol = '*';
let pos = n;

for (let i = 0; i < n; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    if (j < pos) {
      line += ' '
    }
    else {
      line += symbol;
    }
  }
  

  console.log(line);
  line = '';
  pos -= 1;
}

/*
4.faça uma pirâmide com n asteriscos de base:
 */

console.log('\n');

n = 9;
line = '';
symbol = '*';

let mid = (n+1)/2;
let left = mid;
let right = mid;

for (let i = 0; i < mid; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    if (j < left || j > right) {
      line += ' '
    }
    else {
      line += symbol;
    }
  }
  

  console.log(line);
  line = '';
  right += 1;
  left -= 1;
}

/*
5 .Faça uma pirâmide com n asteriscos de base, que seja vazia no meio: */

console.log('\n');

n = 5;
line = '';
symbol = '*';

mid = (n+1)/2;
left = mid;
right = mid;

for (let i = 1; i <= mid; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    if (j == left || j == right || i == mid) {
      line += symbol;
    }
    else {
      line += ' ';
    }
  }
  

  console.log(line);
  line = '';
  right += 1;
  left -= 1;
}

/*
Faça um programa que diz se um número definido numa variável é primo ou não.
*/

console.log('\n');

n = 18;
let divisores = 0;

for (let i = 2; i < n; i += 1) {
  if (17 % i == 0) {
    divisores += 1;
  }
}
if (divisores == 0) {
  console.log(n + " é um número primo");
} 
else {
  console.log(n + " não é um núermo primo");
}