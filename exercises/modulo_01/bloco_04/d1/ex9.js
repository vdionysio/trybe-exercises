/* Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */

let a = 2;
let b = 3;
let c = 8;

if (a % 2 || b % 2 || c % 2) {
  console.log(true);
} 
else {
  console.log(false);
}