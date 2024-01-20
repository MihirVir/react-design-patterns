import {logProps} from "./components/HighOrderComponents/log-props.jsx";
import { HOCUserInfo } from "./components/HighOrderComponents/user-info.jsx"

const UserInfoWrapper = logProps(HOCUserInfo);

export const HOCApp = () => {
    return (
      <>
         <UserInfoWrapper name = {"Mihir"} b = "I am B a string"/>
      </>
    );
};
