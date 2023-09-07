import logo from './logo.svg';
import './App.css';
import SeuNome from './parts/SeuNome';
import {useState} from 'react'
import Hello from './parts/Hello';

function App() {

  //pense como getter e setter
  const [name,setName]=useState()

  function clear(){
    setName(' ')  
  }

  // function genHello(){
  //   alert(name)
  // }

  return (
    <div className="App">
      <h1>State Lift</h1>
      <p>Entendi esse negócio como, passagem de dados entre vários componentes, os dados são "salvos" aqui em app, e são compartilhados entre os componentes</p>
      <p>O componente "SeuNome" pega os dados que seram salvos aqui em app, e depois é possível "redistribuir" entre os outros componentes</p>
      <SeuNome setName={setName}/>

      <Hello name={name}/>

      <button onClick={clear}>Limpar</button>

    {/* {name && <button onClick={genHello}>Gerar Saudação</button>} */}

    {/* O uso do state lift aqui, esta servindo para gerar uma saudção de acordo com o nome que foi inserido */}
    </div>
  );
}

export default App;
