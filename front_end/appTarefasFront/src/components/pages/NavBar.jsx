import { Link } from "react-router-dom"
import styles from "../styles/NavBar.module.css"



function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.Home}>
               
            </div>
            <ul className={styles .list}>
            <li className={styles.item1}>
            <Link to="/">inicio</Link>
            </li>
            <li className={styles.item1}>
            <Link to = "/Tarefas">Tarefas </Link>
            </li>
             <li className={styles.item2}>
            <Link to="/Login">Login</Link>
            </li>
            <li className={styles.item3}>
            <Link to="/registrar">registrar</Link>
            </li>
            </ul>
        </div>
    )
    
}

export default Navbar
  
