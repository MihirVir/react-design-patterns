import { Parent } from "./components/ObserverPattern/parent.jsx";
import mitt from "mitt";

export const emitter = mitt();

console.log("ello")

export const ObserverApp = () => {
  return <Parent />
};

