import { useContext, useState } from "react";
import context from "./Context";

const Login = () => {
  const [userID, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const { isLogin, userName } = useContext(context);

  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.reset();
    if (userID === "test" && pass === "test") {
      isLogin = true;
      userName = userID;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">
          {" "}
          ID :
          <input
            id="userId"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="User ID"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="User Password"
          />
        </label>
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default Login;
