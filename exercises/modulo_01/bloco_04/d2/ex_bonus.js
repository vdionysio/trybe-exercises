//exercicio 1 Ordene o array numbers em ordem crescente e imprima seus valores;
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}

console.log(array);

//exercicio 2 Ordene o array numbers em ordem decrescente e imprima seus valores;
array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] > array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}

console.log(array);

/*
exercicio 3 Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.
*/
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arr = [];
let aux = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (i < numbers.length - 1) {
    arr.push(numbers[i] * numbers[i + 1]);
  }
  else {
    arr.push(numbers[i] * 2);
  }
}
console.log(arr);