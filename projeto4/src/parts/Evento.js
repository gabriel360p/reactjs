
function Evento(){

    function meuEvento(){
        alert('Opa, Fui Acionado!')
    }

    return (

        <div>
            <p>Testando Eventos</p>
            <br/>
            {/* Quando o botão for clicado ele deve chamar a função "meuEvento" */}
            <button onClick={meuEvento}>Me clica!</button>
            <hr/>
        </div>

    )
}

export default Evento