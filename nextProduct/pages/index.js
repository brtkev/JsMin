import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import Container from "../components/container";
import Users from '../components/users';

const Home = (props) => {
    return(
        <Container>
            <Head>
                <title>Nextjs Project - Home</title>
            </Head>
            <h1>Next</h1>
            <Users users={props.users}/>
        </Container>
    );
}

Home.getInitialProps = async (ctx) => {
    let res = await fetch("https://reqres.in/api/users");
    let resJSON = await res.json();
    return { users : resJSON.data }
}

export default Home;