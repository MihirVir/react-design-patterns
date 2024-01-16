import { styled } from "styled-components";


/*
    It is basically doing 
    <div style = {{display: "flex"}}> </div>
    and naming this element as Container so we will be using 
    <Container> </Container> instead of div
*/ 
const Container = styled.div`
    display: flex;
`

const Panel = styled.div`
    flex: ${props => props.flex};
`

/*
    <SplitScreen ...>
        The Left and Right components are the children which are passed 
        as the paramters
        <Left />
        <Right />
    </SplitScreent>
*/
export const SplitScreen = ({children, leftWidth = 1, rightWidth = 1}) => {
    const [left, right] = children;
    return (
        <Container>
            <Panel flex = {leftWidth}>
                {left}
            </Panel>

            <Panel flex = {rightWidth}>
                {right}
            </Panel>
        </Container>
    )
}