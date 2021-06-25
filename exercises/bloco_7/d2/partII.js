const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (obj, value) => {
  obj.turno = value;
};

addTurno(lesson2, 'manhã')
console.log(lesson2)

const listKeys = obj => console.log(`${Object.keys(obj)}`);

listKeys(lesson3);

const objSize = obj => console.log(Object.keys(obj).length);

objSize(lesson1);

const listValues = obj => console.log(`${Object.values(obj)}`);

listValues(lesson2);

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3})
console.log(allLessons);

const totalStudents = obj => {
  const masterKeys = Object.keys(obj);
  let total = 0;
  for (let index of masterKeys) {
    total += obj[index]['numeroEstudantes']
  }
  return total;
}

console.log(totalStudents(allLessons))

const getValueByNumber = (obj, position) => {
  const pairArr = Object.entries(obj);
  return pairArr[position][1];
};

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
  const pairArr = Object.entries(obj);
  let res = false;
  for (let i in pairArr) {
    if (pairArr[i][0] === key && pairArr[i][1] === value) res = true;
  }
  return res;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false