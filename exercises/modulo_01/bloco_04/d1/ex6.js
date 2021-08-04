/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let piece = "peãO";

switch (piece.toLowerCase()) {
  case "bispo":
    console.log("diagonais");
    break;
  case "cavalo":
    console.log("em L (1+3 ou 3+1)");
    break;
  case "rei":
    console.log("retilíneo uma casa");
    break;
  case "rainha":
    console.log("retilíeno e diagonal, livre");
    break;
  case "peão":
    console.log("uma casa para frente, duas no primeiro movimento");
    break;
  case "torre":
    console.log("retilíneo ilimitado");
    break;
}