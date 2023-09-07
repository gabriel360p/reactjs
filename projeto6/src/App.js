import logo from './logo.svg';
import './App.css';
import List from './parts/List';

function App() {

  //os dados são recebidos aqui em app e são passados para um componente
  const db=['Lucas','Mateus','Julia']

  return (
    <div className="App">
      <h1>Listas</h1>

      {/* /passando os dados para o componente */}
      {/* <List users={db} /> */}

      {/*  */}
      <List users={[]} />

    </div>
  );
}

export default App;
