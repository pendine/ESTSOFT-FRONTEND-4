// const Form = (props) => {
function Form () {
  const handleSubmit = (e)=>{
    e.preventDefault();

    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <lable htmlFor="name">name : </lable>
          <input id="name" />
        </div>
        <div>
          <lable htmlFor="addr">address : </lable>
          <input id="addr" />
        </div>
        <button type="submit"> submit </button>
      </form>
    </>
  )
}

export default Form;