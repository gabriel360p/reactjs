import logo from './logo.svg';
import './App.css';
import Evento from './parts/Evento';
import Condicional from './parts/Condicional';

function App() {
  return (
    <div className="App">
        <h1>Evento filho chama evento pai e Renderização condicional!</h1>

      {/* <Evento /> */}


      <Condicional />
      
    </div>
  );
}

export default App;
