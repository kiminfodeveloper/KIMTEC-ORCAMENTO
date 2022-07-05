import styles from './style/Home.module.css'
import LinkButton from '../components/input/LinkButton'

import savings from '../img/savings.svg'

function Home() {
  return (
      <section className={styles.home_container}>
        <h1>Bem-vindo a <span>KimTec</span></h1>
        <p>Comece a gerenciar o seu projeto agora mesmo!</p>
        <LinkButton to="/novoprojeto" text="Criar projeto" />
        <img src={savings} alt="KimTec" />
      </section>
  )
}

export default Home