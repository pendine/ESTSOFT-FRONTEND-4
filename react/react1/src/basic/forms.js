import React, {useState} from 'react';


// selectBox
function SelectBoxTest() {
  const [sel, setSel] = useState("test3");

  const selChange = (event) =>{
    setSel(event.target.value);
  }

  return(
    <form>
      <select 
        value={sel} 
        onChange={selChange}
        >
          <option value="test1">test1</option>
          <option value="test2">test2</option>
          <option value="test3">test3</option>
      </select>
    </form>
  );
}

export default SelectBoxTest;


/*
function UserForm(){
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) =>{
    e.preventDefault();

    // useState = 라이프사이클
    // handleSubmit 이 동작하는동안
    // submittedData 의 내용은 초기화되지 않음
    // handleSubmit 의 동작이 종료된 이후 초기화됨
    
    if( age > 0){
      setSubmittedData({ name, age});
      setName("");
      setAge("");
    }else{
      alert("나이는 0 이상");
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label> 이름 입력
        <input 
          type="text"
          name="username"
          value={name}
          onChange={ (e)=>setName(e.target.value) }
        />
      </label>
      
      <label> 나이 입력
        <input 
          type="number"
          name="age"
          value={age}
          onChange={ (e)=>setAge(e.target.value) }
        />
      </label>

      <button type='submit' >제출</button>
    </form>

 && 연산자를 통해 submittedData 데이터가 들어왔을때
 어떤 내용을 출력 할 것인가를 결정함 
 
    {submittedData && ( 
      <div>
        <h3> 정보 </h3>
        <p>이름 : {submittedData.name}</p>
        <p>나이 : {submittedData.age}</p>
      </div>
    )}
    </>
  );
  
}

export default UserForm;
*/

// function Formtest(){
//   // const [name, setName] = useState("");
//   const [inputs, setInputs] = useState({});

//   let submitTest = (event) =>{
//     event.preventDefault();
//     console.log(inputs);
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.value);
//     console.log(`요청하는 값 : ${inputs}`);
//   }

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     // 이름과 나이에서 호출하게되는데
//     // 각각의 정보를 따로 따로 출력함

//     console.log("입력 폼 초기화");

//     setInputs(values => ({...values, [name]:value}));
    
//   }

//   return (
//     <form onSubmit={submitTest}>
//       <label> 이름 입력
//         <input 
//           type="text"
//           name="username"
//           value={inputs.username || ""}
//           onChange={ handleChange }
//         />
//       </label>
      
//       <label> 나이 입력
//         <input 
//           type="number"
//           name="age"
//           value={inputs.age || ""}
//           onChange={ handleChange }
//         />
//       </label>

//       {/* <button type='submit'> </button> */}
//       <input type='submit' />
//     </form>
//   )
// }
// export default Formtest;