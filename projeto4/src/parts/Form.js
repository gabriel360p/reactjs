//importação
//hooks, importantes!
import { useState } from "react"

function Form(){

// De certa forma o que se faz aqui é recuperar as informações dos formulários
//ele recuperar e assim podemos mandar para o back-end, é isso mesmo, ele pega os dados para enviar ao back
//Nome do campo {name}, o que vou enxergar {setName}
const [name,setName]  = useState()//dessa forma o setName vem vazio, mas podemos atribuir um valor padrão:
// const [name,setName]  = useState("Gabriel")//dessa forma atribuímos um valor padrão para o setName, isso é bom para retornar forms que não passaram em validações
//o 'name' serve como referência para resgatar o valor e o 'setName' para definir o valor

const [password,setPassword]=useState()

const [email,setEmail]=useState()

//aqui ele recupera instantaneamente os dados,a assim que coloca no input, ja cai aqui sem precisar recarregar a página
// console.log(name,password,email)
//dá pra fazer validações com isso, como por exemplo, verificar se a senha tem determinadas características, se o email esta certa e assim por diante
//dá pra fazer essa validação sem precisar recarregar a página!!

// essa variável 'e' é referente aos eventos, é própro do react/js
function store (e){
    // esse preventDefault impede que a página seja recarregada,assim mantendo os dados
    e.preventDefault()
    console.log(name,password,email)
    //futuramente aqui vai ser envio dos dados para o back-end via rota/api
}

    return (

        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={store}>

                <div>
                    <small>Name</small>
                    <input onChange={(e)=>setName(e.target.value)} type="text" type="text" name="name" id="name"/>
                    
                </div>

                <div>
                    <small>Email</small>
                    <input onChange={(e)=>setEmail(e.target.value)}  type="email" name="email" id="email"/>
                </div>


                <div>
                    <small>Senha</small>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password"/>
                </div>

                <div>
                    <input type="submit" value="salvar"/>
                </div>
                
            </form>
        </div>

    )
}

export default Form