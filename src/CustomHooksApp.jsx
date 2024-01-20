import { CustomUserInfo } from "./components/CustomHooks/custom-user-info.jsx";
import { CustomBookInfo } from "./components/CustomHooks/custom-book-info.jsx";

const CustomHooksApp = () => {
  return (
    <>
      <CustomUserInfo userId = {"1"} />
      <CustomBookInfo bookId = {"1"} />
    </>
  )
};


export default CustomHooksApp
