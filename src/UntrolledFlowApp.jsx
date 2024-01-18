import { UncontrolledFlow } from "./components/UncontrolledComponents/uncontrolled-flow"

const First = ({ goNext }) => {
    return (
        <>
            <h1>First Step</h1>
            <button onClick = {goNext}>Next</button>
        </>
    );
};

const Second = ({ goNext }) => {
    return (
        <>
            <h1>Second Step</h1>
            <button onClick = {goNext}>Next</button>
        </>
    );
};

const Third = ({ goNext }) => {
    return (
        <>
            <h1>Third Step</h1>
            <button onClick = {goNext}>Next</button>
        </>
    );
};

export const UncontrolledFlowApp = () => {
    return (
        <>
            <UncontrolledFlow>
                <First />
                <Second />
                <Third />
            </UncontrolledFlow>
        </>
    )
}