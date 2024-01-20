import { RecursiveComponent } from "./components/RecursiveComponents/recursive.jsx"

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
    </>
  )
};
