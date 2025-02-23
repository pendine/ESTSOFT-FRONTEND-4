import InheritanceContext from "./InheritanceContext";
import Child from "./Child";

const Parent = (props) => {
  const context = {
    inheritance: props.inheritance,
  };

  return (
    <InheritanceContext.Provider value={context}>
      <h3>Parents 자산</h3>
      <ul>
        {props.inheritance.map((estate) => (
          <li key={estate.id}>{estate.property}</li>
        ))}
      </ul>
      <Child />
    </InheritanceContext.Provider>
  );
};

export default Parent;
