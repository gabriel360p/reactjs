import { useState } from "react";
import Button from "./Button";

function Evento(){

    function event(){
        alert("Bem Vindo")
    }

    return (

        <div>
            <h3>Eventos com Props</h3>
            <button onClick={event}>ME clica</button>

            {/* Aqui estou passando a evento/função como uma propriedade
                portanto consigo chamar esse evento através do props.meuEvento
                pois esse evento/função meio que vira uma propriedade acessivel pelo props
                muito interessante, dessa forma o "componente filho" tem acesso ao evento do "componente pai"
                subentende-se pai e filho, isso pq o componente button está chamando a um evento
                presente no componente Evento (logo o componente Evento é "pai", e componente Button é "filho")
            */}
            
            <Button event={event} text="Primeiro Evento"/>

        </div>

    )
}

export default Evento