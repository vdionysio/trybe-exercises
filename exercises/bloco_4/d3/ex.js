/*
1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
*/

let n = 5;
let line = '';

for (let i = 0; i < n; i += 1) {
  line += '*';
}

for (let i = 0; i < n; i += 1) {
  console.log(line);
}

/*
2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
*/
console.log('\n')
n = 5;
line = '';

for (let i = 0; i < n; i += 1) {
  line += '*';
  console.log(line);
}


/*
3. Agora inverta o lado do triângulo
*/
console.log('\n')

n = 5;
line = '';
let pos = n;

for (let i = 1; i <= n; i += 1) {
  //1, 
  for (let j = 1; j <= n; j += 1) {
    if (j >= pos) {
      line += '*';
    }
    else {
      line += ' ';
    }
  }
  
  pos -= 1;
  console.log(line);
  line = '';
}

console.log(line);
/*
4. Depois, faça uma pirâmide com n asteriscos de base
*/
console.log('\n')

n = 9;
line = '';
let mid = (n+1)/2;

for (let i = 1; i <= mid; i += 1) {
  //1, 
  for (let j = 1; j <= n; j += 1) {
    if (i == 1 && j == mid) {
      line += '*';
    }
    else if (j > mid - i && j < mid + i){
      line += '*';
    }
    else {
      line += ' ';
    }
  }
  

  console.log(line);
  line = '';
}

console.log(line);