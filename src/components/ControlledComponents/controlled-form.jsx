import { useState, useEffect } from "react";
export const ControlledForm = () => {
  const [err, setErr] = useState(false);
  const [name, setName]  = useState("");
  const [age, setAge] = useState();


  useEffect(() => {
    if (name.length < 4) {
        console.log(`name can't be less than length 1`);
        setErr(true)
    } else {
        setErr(false);
    }
  }, [name]);

  /**
     * Benefits: 
     * i) Easy to validate the inputs
   */
  return (
    <>
        {
            err && (<p>Errror</p>)
        }
        <form>
            <input type="text" name = "name" placeholder = "name" value = {name} onChange = {(e) => setName(e.target.value)} />
            <input type="text" name = "age" placeholder = "age" value = {age} onChange = {(e) => setAge(e.target.value)} />

            <button type = "submit">Submit</button>
        </form>
    </>
  );
};