import {logProps} from "./components/HighOrderComponents/log-props.jsx";
import { HOCUserInfo } from "./components/HighOrderComponents/user-info.jsx";
import { IncludeUser } from "./components/HighOrderComponents/include-user.jsx";

const IncludeUserWrapper = IncludeUser(HOCUserInfo, 3);

export const HOCApp = () => {
    return (
      <>
        <IncludeUserWrapper />
      </>
    );
};
