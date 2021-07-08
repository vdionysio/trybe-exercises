const sumRandomNumbers = () => {

  let arr = [];
  for (let i = 0; i < 10; i += 1) {
    let number = Math.floor(Math.random() * 51);
    arr.push(number);
  }
  const somaArr = arr.map((x) => x ** 2)
    .reduce((acc, curr) => acc + curr, 0);
  
  if (somaArr < 8000) {
    return somaArr;
  }

  throw new Error();
};

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map((n) => sum / n)
  .reduce((acc, curr) => acc + curr)

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
    console.log(sumFromSum);
  } catch {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
};

fetchPromise();