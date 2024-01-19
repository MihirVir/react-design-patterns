import React, { useState } from "react"
import { ControlledFlow } from "./components/ControlledComponents/controlled-flow";
const First = ({ goNext }) => {
    return (
        <>
            <h1>First Step: Enter your name</h1>
            <button onClick = {() => goNext({name: "Mihir"})}>Next</button>
        </>
    );
};

const Second = ({ goNext }) => {
    return (
        <>
            <h1>Second Step: Enter your age</h1>
            <button onClick = {() => goNext({age: 40})}>Next</button>
        </>
    );
};

const Third = ({ goNext }) => {
    return (
        <>
            <h1>Third Step: Enter your country</h1>
            <button onClick = {() => goNext({country: "India"})}>Next</button>
        </>
    );
};

const Fourth = ({ goNext }) => {
    return (
        <>
            <h1>Fourth Step: Congratulations you earn a gift</h1>
            <button onClick = {() => goNext({})}>Next</button>
        </>
    );
};

/**
 * 
 * Controlled Flow Allows us to become more flexible
 * for instance if we want users of age > 25 can access the 
 * 3rd Component with Controlled Flow we can easily access it. 
 */

export const ControlledFlowApp = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [data, setData] = useState({});

    const goNext = (newData) => {
        setData({ ...data, ...newData });
        setCurrentIdx(currentIdx + 1);
    };

    return (
        <>
            <ControlledFlow
                currentIndex={currentIdx}
                onNext={goNext}
            >
                <First />
                <Second />
                {data.age > 25 && <Third />}
                <Fourth />
            </ControlledFlow>
        </>
    );
};