import Container from "../components/container";

import styles from "../styles/index.module.css";
// import playstoreIcon from "../assets/playstore-icon.png";

const Index = () => {
    const playstoreIcon = require("../assets/playstore-icon.png");

    return(
        <Container>
            <div id={styles['main-container']}>
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
        </Container>
    )
}

export default Index;