import { useContext } from "react";
import { Context } from "./Context";

const Hell = () => {
  const { theme } = useContext(Context);

  return (
    <>
      <h1>Hell Page</h1>
      <div>Theme: {theme ? "Light" : "Dark"}</div>
    </>
  );
};

export default Hell;
