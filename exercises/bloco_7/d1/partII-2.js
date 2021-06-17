const longestWord = string => {
  const arr = string.split(' ');
  let higher = '';
  for (let i = 0; i < arr.length; i += 1) {
    higher = arr[i].length > higher.length ? arr[i]: higher;

  }

  console.log(higher)
};

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
