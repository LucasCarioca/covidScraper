import React, {useEffect, useState} from 'react';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import LinearProgress from "@material-ui/core/LinearProgress";
import Pagination from '@material-ui/lab/Pagination';


const DailyData = ({dataPoint, color, visible}) => {
    const [data, setData] = useState()
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch('https://raw.githubusercontent.com/LucasCarioca/covidScraper/main/data.json')
            .then(async res => {
                const loaded = await res.json();
                const list = loaded.daily
                setData(list);
            })
            .then(() => setLoading(false))
    }, [dataPoint, visible, page])

    const pageRange = (x, pageSize) => {
        return {
            start: x.length - (page * pageSize),
            end: page === 1 ? x.length : x.length - ((page - 1) * pageSize)
        }
    }

    const content = () => {
        const {start, end} = pageRange(data, 30)
        return (
            <div>
                <Pagination count={Math.floor(data.length / 30)} page={page}
                            onChange={(event, newPage) => setPage(newPage)} color="primary"/>
                <br/>
                <Table size={'small'}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Date
                            </TableCell>
                            <TableCell>
                                New {dataPoint}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.slice(start, end).reverse().map((item, index) => (
                                <TableRow>
                                    <TableCell>{`${`${item.date}`.slice(4, 6)}/${`${item.date}`.slice(6, 9)}`}</TableCell>
                                    <TableCell>{item[dataPoint]}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <br/>
                <Pagination count={Math.floor(data.length / 30)} page={page}
                            onChange={(event, newPage) => setPage(newPage)} color="primary"/>
            </div>
        )
    }

    return (
        <div>
            {loading ? <LinearProgress/> : content()}
        </div>
    );
}

export default DailyData;
