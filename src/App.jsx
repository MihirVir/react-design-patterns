// import { SplitScreen } from "./components/LayoutPattern/split-screen";

import { LargeAuthorListItem } from "./components/LayoutPattern/Authors/LargeListItems";
import { SmallAuthorListItem } from "./components/LayoutPattern/Authors/SmallListItems";
import { LargeBookListItem } from "./components/LayoutPattern/Books/LargeListItems";
import { SmallBookListItem } from "./components/LayoutPattern/Books/SmallListItems";
import { NumberedList } from "./components/LayoutPattern/Lists/Numbered";
import { RegularList } from "./components/LayoutPattern/Lists/Regular";
import { authors } from "./data/authors";
import { books } from "./data/books";

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
      <NumberedList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem}/>
      <RegularList items={books} sourceName={"book"} ItemComponent={SmallBookListItem}/>
      <NumberedList items={books} sourceName={"book"} ItemComponent={LargeBookListItem}/>
    </>
  )
}

export default App;