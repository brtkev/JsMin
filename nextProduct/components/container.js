import Head from 'next/head';
import Link from 'next/link';
import Navegation from "./navegation"

const Container = props => {

    return(
        <div>
            <Head>
                <title>Nextjs Project</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" />
            </Head>
            <Navegation />
            <div className="container p-4">
                {props.children}
            </div>
        </div>
    )
}

export default Container;