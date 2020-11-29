import React from 'react';
import Totals from "../components/Totals";
import TotalsPie from "../components/TotalsPie";
import {Container} from "@material-ui/core";

const Home = () => {
    return (
        <Container>
            <h1>
                Current Totals
            </h1>
            <TotalsPie/>
            <Totals/>
        </Container>
    )
}

export default Home;