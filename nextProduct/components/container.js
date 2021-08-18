import Head from 'next/head';
import Navegation from "./navegation"

const Container = props => {

    return(
        <div>
            <Head>
                <title>Nextjs Project</title>
            </Head>
            <Navegation />
            {props.children}
        </div>
    )
}

export default Container;