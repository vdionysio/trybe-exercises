import './App.css';

const Task = (value) => {
  return (
    <li className="ListItem">{value}</li>
  );
}

const array = [
  'Reunião',
  'Apresentação',
  'Projeto',
  'Descanso',
  'Feira'
]

function App() {
  return (
    <div>
      {Task('Teste')}
      {array.map((value) => Task(value))}
    </div>
  );
}

export default App;
