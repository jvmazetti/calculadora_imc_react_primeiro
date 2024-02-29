import styles from './Titulo.module.css';

const Titulo = () => {
    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.containerTitle}>Calculadora IMC</h1>
            </div>
        </>
    )
}

export default Titulo;