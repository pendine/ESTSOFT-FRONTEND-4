const APIURL = 'https://api.github.com/users/';

const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

/*
비동기로 데이터를 받아옴
XMLHttpRequest <- 사용하는 일은 거의 없음
 -> jquery Ajax는 볼일 있음

 프로미스 or async await
  -> 둘중 더 많이 사용하는것
  처리를 디테일하게 할때 프로미스
   아니면 async가 편함
  둘다 섞어 쓸 수 도 있음

  유저정보 로딩 -> 제대로 불러오면 repo정보
      못불러오면 에러관련 코드 -> 
*/


function createErrorCard(msg) {
  const cardHTML = `
      <div class="card">
          <h1>${msg}</h1>
      </div>
  `;
  main.innerHTML = cardHTML;
}

async function getUser(userName){
  try{

    const {data} = await axios( APIURL + userName);
    // console.log(`userName : ${userName} `);
    // console.log(`${data}`);
    // const json = JSON.stringify(data);
    // console.log(`${json}`);
    createUserCard(data);
  
    getRepository(userName);

  }catch(error){
    if(error.response.status != 200){
      createErrorCard('fail found user by userName');
    }
  }
}

async function getRepository( user ){
  // data의 의미
  // 구조 분해 할당 개념
  // 받아온 내용중 전체 응답 객체를 저장하지 않고
  // 필요한 내용만 추출하여 사용
  // ,(콤마)를 사용하여 여러 속성을 동시에 추출하는것도 가능
  const { data } = await axios(APIURL + user + '/repos?sort=created')
  console.log(data);
  addReposToCard(data)
}

function createUserCard(user){
  const userID = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : '';
  const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
  `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos){
  try{

    const reposEl = document.querySelector('#repos');
    //html에 repos가 없는데 왜 만들지 않아도 돼나?
    // 아. 이걸 호출하기전에 호출된 createUserCard에서 이미 만드는구나
    repos.slice(0,10)
         .forEach(repo =>{
          const repoEl = document.createElement('a');
          repoEl.classList.add('repo');
          repoEl.href = repo.html_url;
          repoEl.target = '_blank';
          repoEl.innerText = repo.name;
          reposEl.appendChild(repoEl);
         })
  }catch(error){
    createErrorCard('fail loading repository infomation');
  }
}


// submit : 검색, 데이터 전송시.
//  -> 폼 이벤트를  제어할때 사용
form.addEventListener('submit', (e) => {
  // 폼 이벤트 구현시 기본 동작 중단
  e.preventDefault();
  const user = search.value;

  if(user){
    getUser(user);
    search.value='';
  }
})