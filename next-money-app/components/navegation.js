import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from '../styles/navegation.module.css';

const navLinks = [
    { 
        'text' :'Inicio', 'path' : '/'
    }, {
        'text' : 'Como funciona', 'path' : '/docs'
    },{
        'text' : 'Quienes somos', 'path' : '/about'
    },{
        'text' : 'Blog', 'path' : '/blog'
    },{
        'text' : 'Ayuda', 'path' : '/help'
    }
]

export default function Navegation() {

    const router = useRouter();

    const navItem = (link, index) => {
        let style;
        if(link.path ===  router.pathname) style =  styles['text-active'];
        else style = styles['text-inactive'];

        return(
            <li className={styles["nav-item"]} key={index} >
                <Link href={link.path} ><a className={style}>{link.text}</a></Link>
            </li>
        )
    }


    return (
        <div id={styles["main-container"]}>
            <div className={styles["nav-item"]} id={styles["home-container"]}>
                <img id={styles["nav-logo"]} src="https://dummyimage.com/40x40/0000/fff.png&text=logo" alt="logo" />
                <Link href="/"><a className={styles['text-active']} href="">White</a></Link>
            </div>
            <ul id={styles["nav-container"]}>
                { navLinks.map(navItem)}
            </ul>
        </div>
    )
}
