import logo from './logo.svg';
import './App.css';
import Hello from "./parts/Hello"
import Evento from "./parts/Evento"
import Form from "./parts/Form"

function App() {
  return (
    <div className="App">

      <Hello name="Gabriel"/>

      <Evento/>

      <Form />
      
    </div>
  );
}

export default App;
