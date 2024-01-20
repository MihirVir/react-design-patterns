import { useState, useEffect } from "react";
import axios from "axios";

const toCapital = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const includeUpdatableResource = (Component, resourceURL, resourceName ) => {
  return props => {
    console.log(`resource name : ${resourceName}`)
    const [initialResource, setInitialResource] = useState(null);
    const [resource, setResource] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceURL);
        setInitialResource(response.data);
        setResource(response.data);
      })();
    }, []);

    const onChangeHandler = (updates) => {
      setResource({ ...resource, ...updates });
    };
  
    const onPostHandler = async () => {
      const response = await axios.post(resourceURL, { [resourceName]: resource });
      setInitialResource(response.data);
      setResource(response.data);
    };

    const onResetHandler = () => {
      setResource(initialResource);
    };
    
    console.log(`onChange${toCapital(resourceName)}`);

    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCapital(resourceName)}`]: onChangeHandler,
      [`onPost${toCapital(resourceName)}`]: onPostHandler,
      [`onReset${toCapital(resourceName)}`]: onResetHandler,
    }

    return (
      <Component 
        {...props}
        {...resourceProps}
      />
    )
  };
};
