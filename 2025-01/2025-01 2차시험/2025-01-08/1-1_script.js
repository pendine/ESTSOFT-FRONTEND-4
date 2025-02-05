// 무한스크롤
// 프론트 : 비동기로 데이터 요청
// 백엔드 : 데이터 전송 API 구현시
//          정렬순서, 페이징 처리 필요 

let currentPage = 1;
let total = 10;
let limit = 10;
let end = 100;

const get = function(target){
  return document.querySelector(target);
}

// $는 왜... 쓴거지?
// $ <-- 해당 변수가 DOM 요소임을 표시할때의 방법 : 관례
// 일반적인 변수와 구분하기 위해 사용
const $posts = get('.posts');
const $loader = get('.loader');


// 로딩 애니메이션 on/off -------------------
const hideLoader = () => {
  $loader.classList.remove('show');
}

const showLoader = () => {
  $loader.classList.add('show');
}
// 로딩 애니메이션 on/off -------------------

// 요청 url : https://jsonplaceholder.typicode.com/posts
// 아래 예시는 async와 arrow Function 조합
const getPosts = async(page, limit) =>{
  // 지정된 범위만큼만 데이터를 불러오기위해
  // 해당 API에 요청
  const API_URL = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  const response = await fetch(API_URL);
  if(!response.ok){
    throw new Error("error");
  }
  return await response.json();
}

// 게시물 로딩
const loadPosts = async(page,limit) =>{
  showLoader();
  try {
    const response = await getPosts(page, limit)
    showPosts(response);
  } catch (error) {
    console.log(error.message);
  } finally{
    hideLoader();
  }
}


const showPosts = (posts) => {
  posts.forEach( post => {
    const $post = document.createElement('div');
    $post.classList.add('post');
    $post.innerHTML = `
          <div class="header">
            <div class="id">${post.id}.</div>
            <div class="title">${post.title}</div>
          </div>
          <div class="body">${post.body}</div>
          `;
    $posts.appendChild( $post );
  })
}

// -----------------------
const handleScroll = () => {
// 화면에서 ( 현재 스크롤, 화면높이, 전체 문서 높이 ) 를 가져오는 객체
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

  // 게시물을 가져올때마다
  // total값을 업데이트
  if(total === end){
    // 데이터가 고정되어있을때만 사용
    window.removeEventListener('scroll', handleScroll);
    return;
  }

  // 현재 스크롤 위치와 화면 높이, 전체 문서 높이를 계산하여
  // 사용자가 페이지 하단에 도달했는가를 물어보는 조건
  if(scrollTop + clientHeight >= scrollHeight -5){
    currentPage++;
    total +=limit;
    loadPosts(currentPage, limit);
    return;
  }
}


// 돔관련 내용들의 로딩후 실행할 콜백 함수 지정
// 웹페이지 맨 처음부터 이벤트를 바로 실행하고싶을때 사용
window.addEventListener('DOMContentLoaded', ()=>{
  loadPosts( currentPage, limit );
  // 스크롤 이벤트 리스너를 처음부터 등록하여 
  // 추가 데이터를 동적 로딩이 가능토록 설정
  window.addEventListener('scroll' , handleScroll);
})

/*
코드 분석 순서
1. 전역 호출 함수나 domcontentloaded 등의 이벤트 확인
 -> 순서대로 확인
*/