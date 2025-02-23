import { useContext } from "react";
import InheritanceContext from "./InheritanceContext";

const GrandChild = () => {
  const context = useContext(InheritanceContext);

  return (
    <>
      <h3>GrandChild 자산</h3>
      <ul>
        {context.inheritance.map((estate) => {
          return <li key={estate.id}> {estate.property}</li>;
        })}
      </ul>
    </>
  );
};
export default GrandChild;
