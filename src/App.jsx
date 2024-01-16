// import { SplitScreen } from "./components/LayoutPattern/split-screen";

import { LargeAuthorListItem } from "./components/LayoutPattern/Authors/LargeListItems";
import { SmallAuthorListItem } from "./components/LayoutPattern/Authors/SmallListItems";
import { RegularList } from "./components/LayoutPattern/Lists/Regular";
import { authors } from "./data/authors";

// const LeftSideComponent = ({title}) => {
//   return (
//     <h2 style = {{backgroundColor: "crimson"}}>
//       {title}
//     </h2>
//   )
// }

// const RightSideComponent = ({title}) => {
//   return (
//     <h2 style = {{backgroundColor: "brown"}}>
//       {title}
//     </h2>
//   )
// }
function App() {
  return (
    <>
      <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem}/>
      <RegularList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem}/>
    </>
  )
}

export default App;