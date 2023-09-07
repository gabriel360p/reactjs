import logo from './logo.svg';
import './App.css';
import About from "./parts/About";
import Home from "./parts/Home";
import List from "./parts/List";
import Icons from "./parts/Icons";

//importação do roteamento
import { BrowserRouter as Router, Routes,Redirect, Route} from 'react-router-dom';

function App() {
  return (
    //iniciando
    <Router>

      {/* esse navbar está "fixa", como um arquivo master */}
      {/* Mas também posso criar um componente só para guardar essa navbar, dando
        dando essa ideia de arquivos master
      */}
      <div>
        <nav>
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/About"><li>Sobre</li></a>
            <a href="/List"><li>Lista</li></a>
            <a href="/Icons"><li>Icons</li></a>
          </ul>
        </nav>
      </div>

        {/* Lista de rotas */}
        <Routes> 
          {/* Declarando rota */}
          <Route path="/" exact element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/List" element={<List/>}/>
          <Route path="/Icons" element={<Icons/>}/>
        </Routes>
    </Router>    

  );
}

export default App;
