document.addEventListener('DOMContentLoaded' , () =>{

  // 목록 불러오기 함수
  async function fetchTodoList(){
    try{
      const response = await fetch('/list');
      const data = await response.json();

      if( !response.ok)
        throw new Error('서버 연결 오류');

      renderTodoList(data.list);
      
      

    } catch(err){
      
    }
  }

})