import React, {useEffect, useState} from 'react';
import {
    makeWidthFlexible,
    XYPlot,
    VerticalBarSeries,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis
} from "react-vis";
import Button from "@material-ui/core/Button";
import {ButtonGroup} from "@material-ui/core";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

const filter = (range, data) => {

    if (range === 'all') {
        return data
    } else if (range === '2months') {
        const start = data.length - 60
        const end = data.length - 1
        return data.slice(start, end)
    } else if (range === '6months') {
        const start = data.length - 90
        const end = data.length - 1
        return data.slice(start, end)
    }
}
const DailyHospitalizationsLine = ({dataPoint, color}) => {
    const [data, setData] = useState()
    const [rawData, setRawData] = useState()
    const [range, setRange] = useState('all')
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch('https://raw.githubusercontent.com/LucasCarioca/covidScraper/main/data.json')
            .then(async res => {
                const loaded = await res.json();
                const list = filter(range, loaded.daily)
                setRawData(list);
                setData(list.map((day, i) => {
                    return {x: i, y: day[dataPoint]}
                }));
                setLoading(false)
            })
    }, [range, dataPoint])

    const content = () => {
        return (
            <div>
                <FlexibleXYPlot colorType="literal" margin={{left: 100}} height={500}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis
                        title={'Date (by month)'}
                        tickFormat={x => `${rawData[x].date}`.slice(4, 6)}
                        tickTotal={data.length / 30}
                        tickLabelAngle={-45}
                        style={{
                            title: {
                                fontSize: '1rem'
                            },
                            text: {
                                fontSize: '1rem'
                            }
                        }}
                    />
                    <YAxis
                        style={{
                            title: {
                                fontSize: '1rem'
                            },
                            text: {
                                fontSize: '1rem'
                            }
                        }}
                    />
                    <VerticalBarSeries color={color} data={data}/>
                </FlexibleXYPlot>
            </div>
        )
    }

    return (
        <div>
            <ButtonGroup>
                <Button variant={range === 'all'? 'contained' : 'outlined'} color={'primary'} onClick={() => setRange('all')}>All</Button>
                <Button variant={range === '6months'? 'contained' : 'outlined'} color={'primary'} onClick={() => {
                    setRange('6months')
                }}>Six Months</Button>
                <Button variant={range === '2months'? 'contained' : 'outlined'} color={'primary'} onClick={() => {
                    setRange('2months')
                }}>Two Months</Button>
            </ButtonGroup>
            {loading ? <p>loading...</p> : content()}
        </div>
    );
}

export default DailyHospitalizationsLine;
