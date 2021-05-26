/*
1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
*/

function verifyPalindrome(word) {
  let aux = '';
  for (let i = word.length - 1; i >=0; i -= 1) {
    aux += word[i];
  }

  if (aux.toLowerCase() == word.toLowerCase()) {
    return true;
  }
  else {
    return false;
  }
}

console.log(verifyPalindrome('arara'))
console.log();

//2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maxValue(arr) {
  let aux = 0;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    
    for (let j = 0; j < i; j += 1) {

      if (arr[j] > arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = aux;
      }
    }

  }
  return arr[arr.length-1];
}

let teste = [2, 3, 6, 7, 10, 1];
console.log(maxValue(teste));
console.log();

//3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function minValue(arr) {
  let aux = 0;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    
    for (let j = 0; j < i; j += 1) {

      if (arr[j] < arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = aux;
      }
    }

  }
  return arr[arr.length-1];
}

teste = [2, 4, 6, 7, 10, 0, -3];
console.log(minValue(teste));
console.log();

//4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maxChar(names){
  let aux = '';

  for (let key in names) {
    
    if (names[key].length > aux.length) {
      aux = names[key];
    }
  }

  return aux;
}

teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maxChar(teste));
console.log();

//5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostRepeated(arr) {
  let info = {};
  let most;
  let results = [];

  for (let i = 0; i < arr.length; i += 1) {
    info[arr[i]] = 0;
    if (i == 0) {
      most = arr[i];
    }
  }

  for (let key in info) {

    for (let i = 0; i < arr.length; i += 1) {
      if (key == arr[i]){
        info[key] += 1;
      }
    }
  }
  
  for (let key in info) {
    if (info[key] > info[most]){
      most = key;
    }
  }


  return most;
}
teste = [2, 3, 2, 5, 8, 2, 3];

console.log(mostRepeated(teste));
console.log();

//6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function fat(n) {

  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }

  return sum;
}

console.log(fat(5));
console.log();

//7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function checkEndingWord(word, ending) {

  let extract = '';

  for (let i = word.length - ending.length; i < word.length ; i += 1) {
    extract += word[i];
  }
  
  if (extract === ending) {
    return true;
  }
  else {
    return false;
  }
  
}

console.log(checkEndingWord('trybe', 'be'))