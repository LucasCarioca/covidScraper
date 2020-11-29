import React from 'react';
import Totals from "../components/Totals";
import TotalsPie from "../components/TotalsPie";

const Home = () => {
    return (
        <div>
            <h1>
                Current Totals
            </h1>
            <TotalsPie/>
            <Totals/>
        </div>
    )
}

export default Home;