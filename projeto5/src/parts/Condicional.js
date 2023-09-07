import { useState } from "react"

function Condicional(){

    const [email,setEmail]=useState()
    const [userEmail,setUserEmail]=useState()

    function Clear(e){
        // "limpando" a variável
        setUserEmail(' ')
    }

    function Email(e){
        e.preventDefault()
        //pegando o valor de email e colocando dentro de userEmail 
        setUserEmail(email)
        //dessa forma estou pegando os dados do usuário para poder usar, seja para validação ou autenticação e etc..
        // alert(userEmail)
    }

    return (
        <div>
            <form>
                <label>Email</label>
                <input type="email"  onChange={(e)=>setEmail(e.target.value)} name="email"/>
                <br/>
                <button onClick={Email}>Enviar Email</button>
                <button onClick={Clear}>Limpar campos</button>

                {/* if else */}
                {email ? <div> bem vindo {email} </div> : <div> Vc ainda não esta logado</div> }


                {/* Se a condição for true, o elemento logo após && aparecerá na saída. Se é false, O reação ignorará e pulará. */}
                {email && <h1>Messages: {email}</h1>}


            </form>
        </div>
    )
}

export default Condicional