function InsertForm({ onUpdateUser }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    onUpdateUser((prevUser) => ({
      ...prevUser,
      [id]: value, // 입력 필드의 id를 키 값으로 설정
    }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    alert("입력 완료!");
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <table>
          <tr>
            <td>
              <label htmlFor="name">이름 : </label>
            </td>
            <td>
              <input id="name" type="text" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="addr">주소를 쓰세요 : </label>
            </td>
            <td>
              <input id="addr" type="text" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="age">나이 : </label>
            </td>
            <td>
              <input id="age" type="number" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={ {background:"#333", width:"100%"} }>
              <button type="submit" style={{width:"100%"}}>확인</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default InsertForm;
