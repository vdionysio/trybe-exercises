/*
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/
let a = 4;
let b = 5;
let opc = 4;

console.log("1.soma \n2.subtração \n3.multiplicação \n4.divisão \n5.módulo")
switch (opc) {
  case 1:
    console.log("a + b = " + a + b);
    break;
  case 2:
    console.log("a - b = " + a - b);
    break;
  case 3:
    console.log("a * b = " + a * b);
    break;
  case 4:
    console.log("a / b = " + a / b);
    break;
  case 5:
    console.log("a % b = " + a % b);
    break;
}