const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    let arr = [];
    for (let i = 0; i < 10; i += 1) {
      let number = Math.floor(Math.random() * 51);
      arr.push(number);
    }
    const somaArr = arr.map((x) => x ** 2)
      .reduce((acc, curr) => acc + curr, 0);
    
    (somaArr < 8000) ? resolve(somaArr) : reject();
  });

  myPromise
    .then((soma) => [2, 3, 5, 10].map((n) => soma / n))
    .then((arr) => arr.reduce((acc, curr) => acc + curr))
    .then((somaFinal) => console.log(somaFinal))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
  
};

fetchPromise();