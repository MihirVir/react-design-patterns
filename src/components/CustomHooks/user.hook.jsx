import { useState, useEffect } from "react";
import axios from "axios";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:9090/user/${userId}`);
      setUser(response.data);
    })();
  }, []);

  return user;
}
