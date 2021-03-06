import React from 'react';
import AOS from 'aos';
import Title from './Title';
import FAQ from './FAQ';
import Benefits from './Benefits';
import Links from './Links';
import Cards from './Cards';
import { Container} from 'react-bootstrap';
import Screen from './Screen';
import Statement from './Statement';
import NavFooter from './NavFooter';

const Home = () => {

    AOS.init();

    return (
        <React.Fragment>
            <Container >
                <Links />
                <Title />
                <Benefits />
                <Screen />
                <Cards />
                <FAQ />
                <Statement />
                <NavFooter />
            </Container>
        </React.Fragment>
    )
}

export default Home;