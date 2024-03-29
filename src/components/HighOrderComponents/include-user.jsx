import { useState, useEffect } from "react";
import axios from "axios";

export const IncludeUser = (Component, userId) => {
  return props => {
    const [user, setUser] = useState(null)
  
    useEffect(() => {
      (async () => {
        const response = await axios.get(`http://localhost:9090/user/${userId}`);
        setUser(response.data);
      })()
    }, []);

    return <Component {...props} user = {user} />
  };
}; 
