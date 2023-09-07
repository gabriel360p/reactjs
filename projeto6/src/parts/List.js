function List({users}){

    //dados simulados do banco de dados

    return (

        <>
            {/* utilizando fragmentos */}
            
    
            <h3>Usuários</h3>
            {
                // usando uma função especial para "percorrer" a array
                users.map((user,index)=>{

                    //como é só um texto, é assim mesmo
                    return <p key={index}>{user}</p>

                    //mas caso fosse objeto, seria: objeto.atributo
                    //return <p>{user.name}</p>
                })
            }

            {/* verificando se array list tem ou não dados
                pode pensar como consultado se tem usuários salvos no banco ou algo do tipo
                mas a idéia era mostrar impressão de array com condicionais
            */}
            {users.length > 0 ? (
                users.map((user,index)=>{
                    return <p>{user}</p>
                })
            ) : (<div>Nenhum usuário</div>)}

        </>

    )
}

export default List