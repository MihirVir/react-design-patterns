import { UncontrolledFlow } from "./components/UncontrolledComponents/uncontrolled-flow"

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
            <button onClick = {() => goNext({age: 22})}>Next</button>
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

/**
 * 
 * This is called uncontrolled flow because
 * the parent component has little or no
 * controll over the child elements
 *  
 */
export const UncontrolledFlowApp = () => {
    return (
        <>
            <UncontrolledFlow onDone={(data) => {console.log(data); alert("Yay made it to final step")}}>
                <First />
                <Second />
                <Third />
            </UncontrolledFlow>
        </>
    )
}