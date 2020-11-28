import React from 'react';
import Totals from "./components/Totals";
import {CardContent, Container, Grid, Typography} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import TotalsPie from "./components/TotalsPie";
import Card from "@material-ui/core/Card";
import Daily from "./components/Daily";

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
                <Typography variant={'h2'}>Daily Deaths</Typography>
                <br/>
                <Card>
                    <CardContent>
                        <Daily dataPoint={'deaths'} color={'#d63031'}/>
                    </CardContent>
                </Card>
                <br/>
                <Typography variant={'h2'}>Daily Hospitalizations</Typography>
                <br/>
                <Card>
                    <CardContent>
                        <Daily dataPoint={'hospitalizations'} color={'#ff7675'}/>
                    </CardContent>
                </Card>
                <br/>
                <Typography variant={'h2'}>Daily New Cases</Typography>
                <br/>
                <Card>
                    <CardContent>
                        <Daily dataPoint={'cases'} color={'#e17055'}/>
                    </CardContent>
                </Card>
                <br/>
                <Card>
                    <CardContent style={{textAlign: 'center'}}>
                        <Typography>
                            Created by Lucas Desouza on 11/2020
                        </Typography>
                        <br/>
                        <Typography>
                            This site uses data from <a rel="noreferrer" href={'https://covidtracking.com/data/api'}
                                                        target={'_blank'}>
                            Covid Tracking API <OpenInNewIcon style={{fontSize: '1rem'}} color={'primary'}/>
                        </a> in order to observe specific trends in the COVID-19 pandemic within the US.
                            New data is pulled daily at 6pm CST.
                        </Typography>
                        <br/>
                        <Typography>
                            Source code for this project can be found on <a rel="noreferrer"
                                                                            href={'https://github.com/LucasCarioca/covidScraper'}
                                                                            target={'_blank'}>
                            <GitHubIcon style={{fontSize: '1rem'}} color={'primary'}/> GitHub <OpenInNewIcon style={{fontSize: '1rem'}}
                                                                                                     color={'primary'}/>
                        </a>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default App;
