import React, {useState, useEffect} from "react";
import axios from "axios";
export const CurrentUserLoader = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await axios.get("/current-user");

            setUser(res.data);
        })()        
    }, [])

    return (
        <>
            {React.Children.map(children, child => {
                /**
                 * Checking if its a valid child element
                 */
                if (React.isValidElement(child)) {
                    /**
                     * So, basically in here we are cloning children and then
                     * adding a prop named user to every child component
                     * Ex: <UserInfo user = {user} />
                     */
                    return React.cloneElement(child, {user})
                }
                return child;
            })}
        </>
    )
}