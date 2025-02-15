function PrintList({ userList }) {
  return (
    <div className="userList">
      {userList &&
        userList.map( (user,index)=>(
          <div key = {index}>
            <p>이름: {user.name}</p>
            <p>주소: {user.addr}</p>
            <p>나이: {user.age}</p>
          </div>
          )
        )
      }
    </div>
  );
}

export default PrintList;
