function Button(props){

    //quando for retornar apenas uma coisinha, pode-se fazer assim:
    return <button onClick={props.event}>{props.text}</button>
    //agr se for muita coisa, colca entre os parênteses, pois assim vc retorna uma array de coisas, nesse caso estou passando/retornando apenas uma tag, "button"
}

export default Button