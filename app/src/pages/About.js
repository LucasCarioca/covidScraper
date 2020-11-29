import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GitHubIcon from "@material-ui/icons/GitHub";
import Container from "@material-ui/core/Container";

const About = () => {
    return (
        <Container>
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
                        <GitHubIcon style={{fontSize: '1rem'}} color={'primary'}/> GitHub <OpenInNewIcon
                        style={{fontSize: '1rem'}}
                        color={'primary'}/>
                    </a>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default About;