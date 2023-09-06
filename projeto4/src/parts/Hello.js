import styles from "./Hello.module.css"

function Hello({name}){
    return (

        <div className={styles.helloBox}>
            <h1 className={styles.helloText}>Ola {name} !</h1>
            <small>Estudando Eventos</small>
            
        </div>

    )
}

export default Hello