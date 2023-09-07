

function SeuNome({setName}){
    return (

        <div>
            <label>qual seu nome?</label>
            <input type="text" placeholder="seu nome" onChange={(e)=>setName(e.target.value)} />
        </div>
    )
}

export default SeuNome