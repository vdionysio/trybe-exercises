/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let pCent = 110;

if (pCent < 0 || pCent > 100) {
  console.log("entrada inválida")
}
else if (pCent >= 90) {
  console.log("A")
}
else if (pCent >= 80) {
  console.log("B")
}
else if (pCent >= 70) {
  console.log("C")
}
else if (pCent >= 60) {
  console.log("D")
}
else if (pCent >= 50) {
  console.log("E")
}
else {
  console.log("F")
}