import React, {useEffect, useState} from 'react';
import {makeWidthFlexible, XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from "react-vis";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

const DailyNewCasesLine = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/LucasCarioca/covidScraper/main/data.json')
            .then(async res => {
                const loaded = await res.json();
                console.log(loaded.daily);
                setData(loaded.daily.map(day=> {
                    return {x: day.date, y: day.cases}
                }));
            })
    }, [])

    const content = () => {
        return (
            <div>
                <FlexibleXYPlot margin={{left: 100}} height={500}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis
                        title={'Date'}
                        tickFormat={x=>`${`${x}`.slice(4, 6)}/${`${x}`.slice(6, 8)}`}
                        tickTotal={data.count}
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
                        title={'New Cases'}
                        style={{
                            title: {
                                fontSize: '1rem'
                            },
                            text: {
                                fontSize: '1rem'
                            }
                        }}
                    />
                    <LineSeries data={data} />
                </FlexibleXYPlot>
            </div>
        )
    }

    return (
        <div>
            {data ? content() : <p>loading...</p>}
        </div>
    );
}

export default DailyNewCasesLine;
