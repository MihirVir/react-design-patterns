import { useState, useEffect } from "react";
import axios from "axios";

export const includeUpdatableUser = (Component, userId) => {
  return props => {
    // body of comp we are goin to return
    const [initialUser, setInitialUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`http://localhost:9090/user/${userId}`);
        setInitialUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = updates => {
      setUser({...user, ...updates});
    };
    
    const onPostUser = async () => {
      const response = await axios.post(`http://localhost:9090/user/${userId}`, {user});
      setInitialUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(initialUser);
    };

    return <Component {...props}  
      user = {user} 
      onChangeUser = {onChangeUser} 
      onPostUser = {onPostUser} 
      onResetUser = {onResetUser}/>
  };
};
