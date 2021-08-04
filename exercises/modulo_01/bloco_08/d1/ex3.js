const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const highOrder = (correct, answers, callback) => {
  return callback(correct, answers);
};

const checkAnswers = (correct, student) => {
  let points = 0;
  for (let i = 0 ; i < student.length; i += 1) {
    if (student[i] === 'N.A') {}
    else if (student[i] === correct[i]) points += 1
    else points -= 0.5
  }
  return points;
};


console.log(highOrder(rightAnswers, studentAnswers, checkAnswers));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas 
// a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da 
// pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") 
// não altera-se a contagem.