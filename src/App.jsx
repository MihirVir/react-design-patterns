// import { SplitScreen } from "./components/LayoutPattern/split-screen";
import axios from "axios";
import { CurrentUserLoader } from "./components/ContainerComponents/current-user-loader";
import { UserInfo } from "./components/ContainerComponents/user-info";
import { LargeAuthorListItem } from "./components/LayoutPattern/Authors/LargeListItems";
import { SmallAuthorListItem } from "./components/LayoutPattern/Authors/SmallListItems";
import { LargeBookListItem } from "./components/LayoutPattern/Books/LargeListItems";
import { SmallBookListItem } from "./components/LayoutPattern/Books/SmallListItems";
import { NumberedList } from "./components/LayoutPattern/Lists/Numbered";
import { RegularList } from "./components/LayoutPattern/Lists/Regular";
import { Modal } from "./components/LayoutPattern/Modals/Modal";
import { authors } from "./data/authors";
import { books } from "./data/books";
import { UserLoader } from "./components/ContainerComponents/user-loader";
import { ResourceLoader } from "./components/ContainerComponents/resource-loader";
import { BookInfo } from "./components/ContainerComponents/book-info";
import { DataSource } from "./components/ContainerComponents/data-source";
import { DataSourceRenderProps } from "./components/ContainerComponents/data-source-render-props";
const Message = ({ msg }) => {
  return <h1>{msg}</h1>
}
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

// List Main File
//        <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem}/>
//        <NumberedList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem}/>
//        <RegularList items={books} sourceName={"book"} ItemComponent={SmallBookListItem}/>
//        <NumberedList items={books} sourceName={"book"} ItemComponent={LargeBookListItem}/>
// Modal Main File
// <Modal>
//   <LargeBookListItem  book = {books[0]} />
// </Modal>

const getDataFromServer = async (url) => {
  const response = await axios.get(url)
  return response.data;
}

const getDataFromLocalStorage =  (key) => {
  return localStorage.getItem(key);
}
function App() {
  /*
  The ResourceLoader is more flexible than any other component loader we build rn 
  its because we can fetch UserInfo and BookInfo from only One Loader 
  */
 {/* <ResourceLoader resourceUrl={"http://localhost:9090/user/2"} resourceName={"user"}>
   <UserInfo />
 </ResourceLoader>
 <ResourceLoader resourceUrl={"http://localhost:9090/books/1"} resourceName={"book"}>
   <BookInfo />
 </ResourceLoader> */}
  return (
    <>
      <DataSourceRenderProps getData={() => getDataFromServer("http://localhost:9090/user/2")} render = {(resource) => <UserInfo user = {resource}/>}>
      </DataSourceRenderProps>
      <DataSource getData={() => getDataFromLocalStorage("token")} resourceName={"msg"}>
        <Message />
      </DataSource>
    </>
  )
}

export default App;