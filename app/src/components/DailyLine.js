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

    const end = data.length
    if (range === 'all') {
        return data
    } else if (range === '2months') {
        const start = data.length - 60
        return data.slice(start, end)
    } else if (range === '6months') {
        const start = data.length - 90
        return data.slice(start, end)
    }  else if (range === '1month') {
        const start = data.length - 30
        return data.slice(start, end)
    } else if (range === '2weeks') {
        const start = data.length - 14
        return data.slice(start, end)
    } else if (range === '1week') {
        const start = data.length - 7
        return data.slice(start, end)
    }
}
const DailyLine = ({dataPoint, color, visible}) => {
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

            })
            .then(() => setLoading(false))
    }, [range, dataPoint, visible])

    const tickCount = () => {
        if (range === 'all') {
            return 6
        } else if (range === '2weeks') {
            return 14
        } else if (range === '1week') {
            return 7
        } else {
            return 15
        }
    }

    const tickFormat = x => {
        if(!rawData[x]) return 0
        if (range === 'all') {
            return `${rawData[x].date}`.slice(4, 6)
        } else {
            return `${`${rawData[x].date}`.slice(4, 6)}/${`${rawData[x].date}`.slice(6, 9)}`
        }
    }

    const content = () => {
        return (
            <div>
                <FlexibleXYPlot colorType="literal" margin={{left: 100}} height={500}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis
                        tickFormat={tickFormat}
                        tickTotal={tickCount()}
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
                <Button variant={range === 'all' ? 'contained' : 'outlined'} color={'primary'} size={'small'}
                        onClick={() => setRange('all')}>All</Button>
                <Button variant={range === '6months' ? 'contained' : 'outlined'} color={'primary'}  size={'small'} onClick={() => {
                    setRange('6months')
                }}>Ninety Days</Button>
                <Button variant={range === '2months' ? 'contained' : 'outlined'} color={'primary'}  size={'small'} onClick={() => {
                    setRange('2months')
                }}>Sixty Days</Button>
                <Button variant={range === '1month' ? 'contained' : 'outlined'} color={'primary'}  size={'small'} onClick={() => {
                    setRange('1month')
                }}>Thirty Days</Button>
                <Button variant={range === '2weeks' ? 'contained' : 'outlined'} color={'primary'}  size={'small'} onClick={() => {
                    setRange('2weeks')
                }}>Two Weeks</Button>
                <Button variant={range === '1week' ? 'contained' : 'outlined'} color={'primary'}  size={'small'} onClick={() => {
                    setRange('1week')
                }}>One Week</Button>
            </ButtonGroup>
            {loading ? <p>loading...</p> : content()}
        </div>
    );
}

export default DailyLine;
