import logo from './logo.svg';
import './App.css';
import Bar from './parts/Bar';
import Index from './parts/Index';
import Show from './parts/Show';
import Create from './parts/Create';
import About from './parts/About';
import { BrowserRouter as Router,Routes, Redirect,Route } from "react-router-dom";

function App() {
  return (

    <Router>

      <Bar/>

      <Routes>
        
        <Route exact path='/' element={<Index/>}/>
        <Route exact path='/Create' element={<Create/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Show' element={<Show/>}/>

      </Routes>
    </Router>

  );
}

export default App;
