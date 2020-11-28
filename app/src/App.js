import React from 'react';
import Totals from "./components/Totals";
import {CardContent, Container, Grid, Typography} from "@material-ui/core";
import TotalsPie from "./components/TotalsPie";
import DailyHospitalizationsLine from "./components/DailyHospitalizationsLine";
import DailyNewCasesLine from "./components/DailyNewCasesLine";
import Card from "@material-ui/core/Card";

function App() {

    return (
        <div>
            <Container>
                <br/>
                <Typography variant={'h2'}>US Covid-19 status</Typography>
                <hr/>
                <Typography variant={'h2'}>Totals</Typography>
                <br/>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Card>
                            <CardContent>
                                <TotalsPie/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6}>
                        <Totals/>
                    </Grid>
                </Grid>
                <br/>
                <Typography variant={'h2'}>Daily Hospitalizations</Typography>
                <br/>
                <Card>
                    <CardContent>
                        <DailyHospitalizationsLine/>
                    </CardContent>
                </Card>
                <br/>
                <Typography variant={'h2'}>Daily New Cases</Typography>
                <br/>
                <Card>
                    <CardContent>
                        <DailyNewCasesLine/>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default App;
