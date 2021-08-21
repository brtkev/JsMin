import Container from "../components/container";

import styles from "../styles/index.module.css";

const cardsRes = [
    {
        "title" : "Usuarios activos", "count" : 300, "icon" : { "src" : "https://dummyimage.com/40x40/0000/fff.png&text=logo", "alt" : "logo" }
    },{
        "title" : "Descargas", "count" : 300, "icon" : { "src" : "https://dummyimage.com/40x40/0000/fff.png&text=logo", "alt" : "logo" }
    },{
        "title" : "transacciones", "count" : 1000, "icon" : { "src" : "https://dummyimage.com/40x40/0000/fff.png&text=logo", "alt" : "logo" }
    }
]

const Index = () => {


    const infoCards = cardsRes.map( (value, index) => {

        return(
            <div className={styles["info-card"]} key={index}>
                <div className={styles['info-card__image-container']}>
                    <img src={value.icon.src} alt={value.icon.alt} />
                </div>
                <div className={styles['info-card__text-container']}>
                    <p>{value.title}</p>
                    <p>{value.count} {value.title.split(' ')[0]}</p>
                </div>
                { index !== cardsRes.length-1 ? <div className={ styles['separator']}></div> : undefined}
            </div>
        )
    });

    return(
        <Container>
            <div id={styles['main-container']}>
                <div id={styles['row-1']}>
                    <section id={styles["introduction-sec"]}>
                        <p id={styles["welcome-text"]}>Bienvenidos a WhitePay</p>
                        <h1 id={styles["description-text"]}>La mejor app para enviar y <span className={styles["text-secondary-color"]}>recibir dinero de manera Facil</span></h1>
                        <p id={styles["small-text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sint nemo ipsum impedit aliquid quas dolorem voluptatum fugiat</p>
                        <button id={styles["play-store-button"]}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/512px-Google_Play_Arrow_logo.svg.png" alt="playstore icon" id={styles["playstore-icon"]} />
                            <p>Play Store</p>
                        </button>
                    </section>
                    <section id={styles["decor-sec"]} >
                        <div id={styles["rectangle"]}>
                        </div>

                    </section>
                </div>
                <div id={styles['row-2']}>
                    {infoCards}
                </div>
            </div>
        </Container>
    )
}

export default Index;