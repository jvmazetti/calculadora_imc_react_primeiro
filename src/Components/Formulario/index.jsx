import styles from './Formulario.module.css';
import { useState, useEffect } from "react"

const Formulario = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);
    let [nome, setNome] = useState('');

    const renderizaResultado = () => {
        const name = nome;
        const alturaAoQuadrado = (altura * altura);
        const imc = peso / alturaAoQuadrado;
    
        if (imc <= 18) {
          return(
            <p>Olá {name}, seu imc é de {imc.toFixed(2)}, você está abaixo do peso</p>
          )
        } else if (imc > 18, imc <= 24.9) {
          return(
            <p>Olá {name}, seu imc é de {imc.toFixed(2)}, você está no seu peso ideal, parabéns</p>
          )
        } else if (imc >= 25, imc <= 29.9) {
          return(
            <p>Olá {name}, seu imc é de {imc.toFixed(2)}, você está acima do peso, se cuide um pouco mais</p>
          )
        } else if (imc >= 30, imc <= 34.9) {
          return(
            <p>Olá {name}, seu imc é de {imc.toFixed(2)}, você está com obesidade de grau I, procure um profissional da saúde</p>
          )
        } else if (imc >= 35, imc <= 39.9) {
          return(
            <p>Olá {name}, seu imc é de {imc.toFixed(2)}, você já está com obesidade grau II, procure um médico urgentemente</p>
          )
        } else if (imc >= 40) {
          return(
            <p>Olá {name}, seu imc é de {imc.toFixed(2)}, você está com obesidade morbida, precisa de ajuda o quanto antes</p>
          )
        } else {
          return(
            <p>Preencha todos os campos do formulário corretamente</p>
          )
        }  
      }

    return(
       <>
        <form className={styles.form}>
            <input className={styles.formItem} type="text" placeholder="Qual o seu nome ?" onChange={evento => setNome(evento.target.value)}/>
            <input className={styles.formItem} type="number" placeholder="Digite sua altura aqui" onChange={evento => setAltura(evento.target.value)}/>
            <input className={styles.formItem} type="number" placeholder="Digite seu peso aqui" onChange={evento => setPeso(evento.target.value)}/>
            <p className={styles.formResult}>{renderizaResultado()}</p>
        </form>
       </>
    )
}

export default Formulario;