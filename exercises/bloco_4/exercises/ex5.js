/* Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
 */

let alpha = 40;
let beta = 50;
let gama = 90;

let soma = alpha + beta + gama;
let erro = false;

if (typeof alpha != 'number' || alpha < 0) {
  console.log("alpha é invalido");
  erro  = true;
} 
if (typeof beta != 'number' || beta < 0) {
  console.log("beta é invalido");
  erro  = true;
}
if (typeof gama != 'number' || gama < 0) {
  console.log("gama é invalido")
  erro  = true;
}

switch (erro) {
  case true:
    console.log("ERRO")
    break;
  case false:
    if (soma == 180) { 
      console.log(true);
    }
    else {
      console.log(false);
    }
}
