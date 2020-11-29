import React, {useState} from 'react';
import {Card, CardContent} from "@material-ui/core";
import DailyLine from "../components/DailyLine";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DailyData from "../components/DailyData";
import Container from "@material-ui/core/Container";

const Daily = ({dataPoint, color, title}) => {
    const [tab, setTab] = useState(0)
    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={tab} onChange={handleChange}>
                    <Tab label="Graph"/>
                    <Tab label="Data"/>
                </Tabs>
            </AppBar>
            <Container>
                <h1>{title}</h1>
                <Card hidden={tab !== 0}>
                    <CardContent>
                        <DailyLine dataPoint={dataPoint} color={color} visible={tab !== 0}/>
                    </CardContent>
                </Card>
                <Card hidden={tab !== 1}>
                    <CardContent>
                        <DailyData dataPoint={dataPoint} color={color} visible={tab !== 0}/>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default Daily;