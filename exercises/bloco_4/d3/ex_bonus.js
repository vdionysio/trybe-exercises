/*
5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
*/

n = 13;
line = '';
let mid = (n+1)/2;

for (let i = 1; i <= mid; i += 1) {

  for (let j = 1; j <= n; j += 1) {
    if (i == mid){
      line += '*';
    }
    else if (i == 1 && j == mid) {
      line += '*';
    }
    else if ( i > 1 && (j == mid - i  +1 || j == mid + i -1)){
      line += '*';
    }
    else {
      line += ' ';
    }

  }
  

  console.log(line);
  line = '';
}

/*
Faça um programa que diz se um número definido numa variável é primo ou não
*/
console.log('\n')

n = 17;
let aux = 0;

for (let c = 2; c < 29; c += 1){
  if (n % c == 0) {
    aux += 1;
  }

}
if (aux > 0) {
  console.log(n, "é número primo");
}
else {
  console.log(n, "NÃO é número primo");
}