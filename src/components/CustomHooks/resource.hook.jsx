import { useState, useEffect } from "react";
import axios from "axios";

/*
 * Making fetching data using custom hook more generic
 *
 */

export const useResource = (resourceURL) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceURL);
      setResource(response.data);
    })();
  }, []);

  return resource;
};
