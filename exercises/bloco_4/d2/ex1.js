let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let i = 0; i < numbers.length ; i += 1) {
  console.log(numbers[i]);
}

//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let aux = 0;
for (let i = 0; i < numbers.length ; i += 1) {
  aux += numbers[i];
}
console.log( aux);

//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

aux = 0;
for (let i = 0; i < numbers.length ; i += 1) {
  aux += numbers[i];
}
console.log(aux / numbers.length );

//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

aux = 0;
for (let i = 0; i < numbers.length ; i += 1) {
  aux += numbers[i];
}
if (aux / numbers.length > 20) {
  console.log('Valor maior que 20');
}
else {
  console.log('valor menor ou igual a 20');
}

//5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
aux = 0;
for (let i of numbers) {
  if (i > aux) {
    aux = i;
  }
}
console.log(aux);

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

aux = 0;
for (let i of numbers) {
  if (i % 2 !== 0) {
    aux += 1;
  }
}
console.log(aux);

//7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
aux = 0;
for (let i = 0; i < numbers.length ; i += 1) {
  if (i == 0) {
    aux = numbers[i];
  }
  else if ( numbers[i] < aux){
    aux = numbers[i];
  }
}
console.log(aux);

//8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let arr = [];
for (let i = 1; i <= 25; i += 1) {
  arr.push(i);
}
console.log(arr);

//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let i of arr) {
  console.log(i/2);
}