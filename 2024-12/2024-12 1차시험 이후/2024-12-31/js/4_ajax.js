const load = document.querySelector('.btn-load');

load.addEventListener('click', function(){
  const result = document.querySelector('#result');
  // 요청하기전에 데이터 받아올 준비
  result.innerHTML = `
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    `;

  const xhr = new XMLHttpRequest();

  xhr.open('GET' , 'https://jsonplaceholder.typicode.com/users');
  // xhr.setRequestHeader

  // xhr.onreadystatechange 
  
  // 수신된 데이터에 대한 예외처리
  xhr.onload = function(){
    if(xhr.status ===200){
      console.log("요청 성공");
      const users = JSON.parse(xhr.responseText);
      // 유저 카드 렌더링
      // 똑같이 쓰지만 전역에 두진 않은이유 , map, join 과제
      
      renderUsers(users);
    }
    // 실패했을때
    else{
      handleError(xhr.status);
    } 
  }

  xhr.onerror= function(){
    handleError('네트워크 연결 문제');
  }

  xhr.send();
})

function handleError(error){
  const result = document.querySelector('#result');
  result.innerHTML = `
      <div class="error-message">
        ERROR : ${error}
        <h1>데이터를 불러오지 못했습니다.<h1>
      </div>
  `;
}

function renderUsers(users){
  const result = document.querySelector('#result');
  result.innerHTML = users.map(user =>`
    <div class="user-card">
      <h2>${user.name}</h2>
      <p>${user.email}</p>
      <p>${user.company.name}</p>
      <div class="user-details">
        <span>${user.address.city}</span>
        <span>${user.phone}</span>
      </div>
    </div>
    `).join('');
}