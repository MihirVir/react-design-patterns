import React,{ useEffect, useState } from "react"
import axios from "axios";
export const UserLoader = ({ userId ,children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:9090/user/${userId}`);
            setUser(res.data);
        })()
    }, [userId])

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user });
                }
                return child;
            })}
        </>
    )
}