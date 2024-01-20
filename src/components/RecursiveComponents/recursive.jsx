// checking if data is an object or not
const isObject = (data) => typeof data === "object" && data !== null;

export const RecursiveComponent = ({data}) => {
  console.log("recursion is active") 
 
  if (!isObject(data)) {
    return (
      <>
        <li>{data}</li>
      </>
    )
  }
  // will return an array that contains key val pairs of data obj
  const pairs = Object.entries(data);
  

  return (
    <>
      {pairs.map(([key, val]) => (
        <li key = {key}>
          {key}:
          <ul>
            <RecursiveComponent data = {val} />
          </ul>
        </li>
      ))}
    </>
  )
};
