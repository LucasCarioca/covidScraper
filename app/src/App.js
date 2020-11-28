import React from 'react';
import Totals from "./components/Totals";
import {Container, Grid, Typography} from "@material-ui/core";
import TotalsPie from "./components/TotalsPie";
import DailyHospitalizationsLine from "./components/DailyHospitalizationsLine";
import DailyNewCasesLine from "./components/DailyNewCasesLine";

function App() {

    return (
        <div>
            <Container>
                <Typography variant={'h2'}>US Covid-19 status</Typography>
                <hr/>
                <Typography variant={'h2'}>Totals</Typography>
                <br/>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <TotalsPie/>
                    </Grid>
                    <Grid item md={6}>
                        <Totals/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <Typography variant={'h2'}>Daily Hospitalizations</Typography>
                        <br/>
                        <DailyHospitalizationsLine/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <Typography variant={'h2'}>Daily New Cases</Typography>
                        <br/>
                        <DailyNewCasesLine/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
