import { useContext } from "react";
import Context from "./Context";

const Hell = () => {
  const{ getTheme} = useContext(Context);
  return (
    <h1>Hell Page</h1>
    <div>theme : {getTheme}</div>
  );
};
export default Hell;
