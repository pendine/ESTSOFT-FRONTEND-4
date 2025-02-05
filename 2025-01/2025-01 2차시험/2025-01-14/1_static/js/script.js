document.addEventListener('DOMContentLoaded' , () =>{
  const addBtn = document.querySelector('.btn-primary');
  addBtn.addEventListener('click' , addTodo);

  // 목록 불러오기 함수
  async function fetchTodoList(){
    try{
      const response = await fetch('/list');
      const data = await response.json();

      if( !response.ok)
        throw new Error('서버 연결 오류');

      renderTodoList(data.list);
      
    } catch(err){
      console.error('목록 불러오기 실패 에러 : ' , err);
    }
  }

  fetchTodoList();
  
  //todo 목록 렌더링 함수
  async function renderTodoList( list ){  
    /* try
    try{
      const todoList = document.querySelector('#todo-list'); // tbody
      
      let returnString = '';
      for(let i = 0 ; i < list.length; i ++ ){
        
        let doing = list.content;
        let string = `
          <tr>
            <td> ${i} </td>
            <td> ${list.content} </td>
            <td> <button class=""> 완료 </button>  </td>
            <td> <button class=""> 삭제 </button> </td>
          </tr>
        `;
        returnString += string;
      }
      return returnString;

    }catch(err){
      console.error('Todo List 렌더링 에러 : ' , err);
      return;
    }
*/
    // Answer
    const tbody = document.querySelector('#todo-list');
    //map 함수는 key:value 데이터가 여러건 있을때 사용
    tbody.innerHTML = list.map((todo, index) => `
        <tr>
          <td>${index + 1}</td>
          <td class=" ${todo.complete ? 'complete':''} ">${todo.contents}</td>
          <td> 
            <button type="button" class="btn btn-success complete-btn" data-id="${todo.id}">
              완료
            </button>
          </td>
          <td> 
            <button type="button" class="btn btn-danger delete-btn" data-id="${todo.id}">
              삭제
            </button>
          </td>
        </tr>
        `).join('');
        // `, join('')); // 오류 부분

    // 완료/삭제 이벤트 리스너
    tbody.addEventListener('click' , async(e)=>{
      const target = e.target;
      const id = Number(target.dataset.id);
      console.log("button id : " + id );

      if(target.classList.contains('complete-btn')){
        await completeTodo(id);
      }
      
      if(target.classList.contains('delete-btn')){
        // 삭제는 바로 실행되는 것 보다
        // 실수를 방지하기 위해 사용자에게 
        // 다시 확인을 받을 필요가 있다
        await delTodo(id);
      }
    });
  }

  // 데이터 정상적으로 추가되는지
  // 추가한 데이터를 바로 봐야함
  async function addTodo(){
    const todoInput = document.getElementById("new_todo");
    const contents = todoInput.value.trim();

    if (!contents) {
      alert("할 일을 입력해 주세요.");
      return;
    }

    try {
      const response = await fetch("/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contents }),
      });

      if (response.ok) {
        todoInput.value = "";
        await fetchTodoList();
      } else {
        alert("할 일 추가 실패");
      }
    } catch (error) {
      console.error("Todo 추가 실패:", error);
    }
  }

  async function completeTodo(id){
    try{
      const response = await fetch('/complete', {
        method: 'post'
        , headers : { 
          'Content-Type' : 'application/json'
        }
        ,body: JSON.stringify({id})
      });
      
      if (response.ok) {
        fetchTodoList();
      } else {
        alert("할 일 추가 실패");
      }

    } catch(err) {
      console.log("에러남 : " , err);
      return new Error("todo complete err : " + err);
    }
  }

  
  async function delTodo(id){
    try{
      const response = await fetch('/del', {
        method: 'post'
        , headers : { 
          'Content-Type' : 'application/json'
        }
        , body: JSON.stringify({id})
      });
      
      if (response.ok) {
        fetchTodoList();
      } else {
        alert("할 일 삭제 실패");
      }

    } catch(err) {
      console.log("에러남 : " , err);
      return new Error("todo delete err : " + err);
    }
  }
})