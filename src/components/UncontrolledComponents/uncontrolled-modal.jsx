import { useState } from "react";
import {styled} from "styled-components"

const ModalBackground = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    overflow: auto;
    background-color: #00000070;
    width: 100%;
    height: 100%;
`

const ModalContent = styled.div`
    margin: 12% auto;
    padding: 24px;
    background-color: wheat;
    width: 50%;
`

/**
 * This modal is uncontrolled because the outside components can't access its features directly 
 */

export const UncontrolledModal = ({ children }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(true)}>Show Modal</button>
            { show && (
                <ModalBackground onClick={() => setShow(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setShow(false)}>Close Modal</button>
                        {children}
                    </ModalContent>
                </ModalBackground>
            )}
        </>
    )
}