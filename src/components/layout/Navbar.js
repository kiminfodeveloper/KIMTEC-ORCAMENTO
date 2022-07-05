import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './styles/Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar () {
    return(
        <nav className={styles.navbar}>
        <Container>
            <Link to="/">
                <img src={logo} alt="Kim Tec" />
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/sobre">Sobre nós</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/contato">Contatos</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/projeto">Projeto</Link>
                </li>
            </ul>
        </Container>
        </nav>
    )
}

export default Navbar