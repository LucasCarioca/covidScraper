import React, {useEffect, useState} from 'react';
import {TableContainer, TableRow, Typography} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Totals = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/LucasCarioca/covidScraper/main/data.json')
            .then(async res => {
                const loaded = await res.json();
                setData(loaded);
            })
    }, [])

    const content = () => {
        return (
            <>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Index</TableCell>
                                <TableCell>Count</TableCell>
                                <TableCell>Rate</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><strong>Total cases</strong></TableCell>
                                <TableCell>{numberWithCommas(data.total)}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Total deaths</strong></TableCell>
                                <TableCell>{numberWithCommas(data.deaths)}</TableCell>
                                <TableCell>{data.deathRate.toFixed(2)}%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Total recovered</strong></TableCell>
                                <TableCell>{numberWithCommas(data.recovered)}</TableCell>
                                <TableCell>{data.recoveryRate.toFixed(2)}%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Currently infected</strong></TableCell>
                                <TableCell>{numberWithCommas(data.currentlyInfected)}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Currently hospitalized</strong></TableCell>
                                <TableCell>{numberWithCommas(data.currentlyHospitalized)}</TableCell>
                                <TableCell>{data.hospitalizedRate.toFixed(2)}%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Currently in ICU</strong></TableCell>
                                <TableCell>{numberWithCommas(data.currentlyInICU)}</TableCell>
                                <TableCell>*{data.inICURate.toFixed(2)}%</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography>* Percent of hospitalized patients that are currently in the ICU.</Typography>
            </>
        )
    }

    return (
        <div>
            {data ? content() : <p>loading...</p>}
        </div>
    );
}

export default Totals;
