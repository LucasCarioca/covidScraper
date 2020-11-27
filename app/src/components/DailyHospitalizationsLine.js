import React, {useEffect, useState} from 'react';
import {RadialChart} from "react-vis";

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const DailyHospitalizationsLine = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/LucasCarioca/covidScraper/main/data.json')
            .then(async res => {
                const loaded = await res.json();
                console.log(loaded.daily);
                setData(loaded.daily);
            })
    }, [])

    const content = () => {
        return (
            <div>

            </div>
        )
    }

    return (
        <div>
            {data ? content() : <p>loading...</p>}
        </div>
    );
}

export default DailyHospitalizationsLine;
