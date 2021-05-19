/*
Faça um programa que retorne o maior de três números.
Defina no começo do programa três variáveis com os valores que serão comparados.
*/

let a = 10;
let b = 10;
let c = 30;

if (a > b || a == b) {
  if (c > a){ console.log(c)}
  else { console.log(a)}
}
else if (a > c || a == c) {
  if (b > a) { console.log(b)}
  else { console.log(a)}
}
else if (b > c) {
  console.log(b)
}
else if (c == b) {
  console.log(c)
}
