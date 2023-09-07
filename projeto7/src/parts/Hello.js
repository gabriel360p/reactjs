function Hello({name}){
    
    function gerarhelllo(anyName){
        // console.log("Ola "+anyName+" tudo bem?")
        return `Ola, ${anyName}, tudo bem?`
    }

    //retornando a chamada da método gerarhello
    return (
        //essa condicional faz com que a saudação só seja gerada, caso o "name" esteja preenchido
        <div>
            { 
                name && <p>{gerarhelllo(name)}</p>
            }
        </div>

    )
}

export default Hello