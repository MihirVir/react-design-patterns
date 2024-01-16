import { SplitScreen } from "./components/LayoutPattern/split-screen";

const LeftSideComponent = ({title}) => {
  return (
    <h2 style = {{backgroundColor: "crimson"}}>
      {title}
    </h2>
  )
}

const RightSideComponent = ({title}) => {
  return (
    <h2 style = {{backgroundColor: "brown"}}>
      {title}
    </h2>
  )
}
function App() {
  return (<SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComponent title = {"Left"}/>
      <RightSideComponent title = {"Right"}/>
    </SplitScreen>
  );
}

export default App;