import { useRef } from "react"
import EmailRef from "./EmailRef";

const Form = (props) =>{
  const emailRef = useRef({});
  const handleSubmit = (e) =>{
    e.preventDefault();
    props.insertUser({
      name:e.target.name.value,
      address:e.target.address.value,
      email:emailRef.current.email,
    })
    e.target.reset();
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">이름:</label>
          <input id="name"/>
        </div>
        <div>
          <label htmlFor="addr">주소:</label>
          <input id="addr"/>
        </div>
        <EmailRef ref={emailRef} />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Form;