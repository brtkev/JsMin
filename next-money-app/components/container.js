import Navegation from "./navegation"
import styles from '../styles/container.module.css'

export default function Container({children}) {
    return (
        <div id={styles['main-container']} >
            <Navegation />
            { children }
        </div>
    )
}
