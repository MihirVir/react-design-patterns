import React,{ useState } from "react"

// when user hits the last child onDone will be called
export const UncontrolledFlow = ({ children, onDone }) => {
    const [data, setData] = useState({});
    const [currentStepIdx, setCurrentStepIdx] = useState(0);
    
    const goNext = () => {
        setCurrentStepIdx(currentStepIdx + 1);
    };

    const currentChild = React.Children.toArray(children)[currentStepIdx];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goNext });
    }

    return <h1>Finished Steps</h1>;
};