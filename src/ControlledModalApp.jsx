import { useState } from "react"
import { ControlledModal } from "./components/ControlledComponents/controlled-modal"
export const ControlledModalApp = () => {
    const [shouldDisplay, setShouldDisplay] = useState(false);

    return (
        <>
            <ControlledModal shouldDisplay={shouldDisplay} onClose={() => {setShouldDisplay(false)}}>
                <h4>Hello World</h4>
            </ControlledModal>

            <button onClick = {() => setShouldDisplay(!shouldDisplay)} >
              { shouldDisplay ? "Hide Modal" : "Display Modal"}
            </button>

        </>
    )
}
