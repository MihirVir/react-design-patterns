import { createContext, useContext } from "react";
/*
 * Compound Components: 
 * 
 * Breaking down a component into several sub components
 * and then composing those sub components to making it 
 * achieve a greater component
 *
*/

const Context = createContext(null);

const Header = ({children}) => {
  const { test } = useContext(Context);
  console.log("value of test is " + " " + test);
  return (
    <>
      <div style = {{
        borderBottom: "1px solid black",
        padding: ".5rem",
        marginBottom: ".5rem"
      }}>
        {children}
      </div>
    </>
  );
};

const Body = ({children}) => {
  return <div style = {{padding: ".5rem"}}>{children}</div>;
};


const Footer = ({children}) => {
  return (
    <>
      <div style = {{
        borderTop: "1px solid black",
        padding: ".5rem",
        marginTop: ".5rem"
      }}>
        {children}
      </div>
    </>
  );
};

const CompoundCard = ({ header, footer, children }) => {
  return (
    <>
      <Context.Provider value = {{ test: "Value" }}>
        <div style = {{border: "1px solid black"}}>{children}</div>
      </Context.Provider>
    </>
  );
};

export default CompoundCard;

CompoundCard.Header=  Header;
CompoundCard.Body = Body;
CompoundCard.Footer = Footer;
