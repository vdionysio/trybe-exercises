/*
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
*/

let salario = 3000;
let inssRate;
let irRate;
let salarioLiquido;

// INSS
if (salario < 1556.94) {
  inssRate = 0.8 * salario;
}
else if (salario <= 2594.92) {
  inssRate = 0.9 * salario;
}
else if (salario <= 5189.82) {
  inssRate = 0.11 * salario;
}
else {
  inssRate = 570.88;
}

salario -= inssRate
console.log(salario)

// IR
if (salario <= 1903.98) {
  irRate = 0;
}
else if (salario <= 2826.65) {
  irRate = (0.075 * salario) - 142.80;
}
else if (salario <= 3751.05) {
  irRate = (0.15 * salario) - 354.80;
}
else {
  irRate = (0.275 * salario) - 869.36;
}

salarioLiquido = salario - irRate;
console.log(salarioLiquido)