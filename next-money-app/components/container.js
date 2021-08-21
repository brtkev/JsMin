import Navegation from "./navegation"
import styles from '../styles/container.module.css'

export default function Container({children, id, className}) {
    return (
        <div  id={id ? id : styles['main-container']} className={className} >
            <Navegation />
            { children }
        </div>
    )
}
