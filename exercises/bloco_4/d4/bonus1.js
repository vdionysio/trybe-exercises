//1. (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function romanToArabic(roman) {
  let strArr = [];
  let baseRoman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let sum = 0;

  if (roman.length == 1) {
    return baseRoman[roman];
  }
  else {
    for (let key in roman) {
      strArr.push(roman[key]);
    }
    console.log(strArr);

    for (let i = 0; i < strArr.length; i += 1) {
      
      if (baseRoman[strArr[i]] < baseRoman[strArr[i+1]]) {
        sum = sum + (baseRoman[strArr[i+1]] - baseRoman[strArr[i]])
        i += 1;
      }
      else {
        sum = sum + baseRoman[strArr[i]]
      }
    }
  }
  console.log(sum);

  return(sum);
}

console.log(romanToArabic('LXI'));
