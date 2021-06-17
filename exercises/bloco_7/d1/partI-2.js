const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
// const orderArray = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     let aux = 0;
//     for (let j = i+1; j < arr.length; j += 1) {
//       if (arr[i] > arr[j]) {
//         aux = arr[j];
//         arr[j] = arr[i]
//         arr[i] = aux
//       }
//     }
//   }
//   return arr;
// };

// console.log(`Os números ${orderArray(oddsAndEvens)} se encontram ordenados de forma crescente`);
console.log(`Os números ${oddsAndEvens.sort(function(a, b){return a - b})} se encontram ordenados de forma crescente`)
console.log(`Os números ${oddsAndEvens.sort(function(a, b){return b - a})} se encontram ordenados de forma decrescente`)

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.