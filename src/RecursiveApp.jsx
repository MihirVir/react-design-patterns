import { RecursiveComponent } from "./components/RecursiveComponents/recursive.jsx"
import { RedButton, GreenSmallButton } from "./components/compositions/compositions.jsx";
import { LargeRedButton } from "./components/compositions/partial.jsx";

const nestedObject = {
  key: "val1",
  key2: {
    innerKey1: "innervalue1",
    innerKey2: "innervalue2",
    innerKey3: {
      innerInnerKey1: "Hello",
      innerInnerKey2: "World"
    },
  },
  key3: "value3"
};
console.log("Hello from the component")
export const RecursiveApp = () =>  {
  return (
    <>
      <h1>Hello </h1>
      <ul>
        <RecursiveComponent data = {nestedObject} />
      </ul>
      <RedButton text = "I'm Red" />
      <GreenSmallButton text = "I am green and small" />
      <LargeRedButton text = "Im a Large Red Button"/>
    </>
  )
};
