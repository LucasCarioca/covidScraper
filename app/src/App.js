import React from 'react';
import Totals from "./components/Totals";
import {Container, Grid} from "@material-ui/core";
import TotalsPie from "./components/TotalsPie";

function App() {

    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <h2>Totals</h2>
                        <Totals/>
                    </Grid>
                    <Grid item md={4}>
                        <h2>Death/Recovery</h2>
                        <TotalsPie/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
