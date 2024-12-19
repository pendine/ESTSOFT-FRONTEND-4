const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

getMovies(API_URL);
// getMovies(IMG_PATH);
// getMovies(SEARCH_API);

// 외부의 데이터를 가져와 사용자 페이지에 응답을 처리하기 때문에
// 내용을 요청받아 페이지에 해당 내용을 가공하여 응답 처리
async function getMovies(url){
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
  showMovies(data.results);
}

function getClassByRate(vote){
  if(vote >= 8){
    return 'green'
  }
  else if(vote >= 5){
    return 'orange';
  }
  else {
    return 'red';
  }
}

// movies에는 요청한 데이터의 결과들이 들어있음.
function showMovies(movies){
  main.innerHTML = '';

  // movies.array.forEach(element => {

  // movies.forEach( (movie, idx) => {
  //   console.log(movie);
  //   console.log(idx);    
  // });

  movies.forEach( movie => {
    const {title, poster_path,vote_average, overview} = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    // 아래의 html은 자바스크립트에서 직접 만드는게 아니라
    // 우선 html파일에서 해당 영역을 미리 작업한 후
    // 자바스크립트로 불어오게됨.
    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
        `;
    main.appendChild(movieEl);
  });
}

form.addEventListener('submit' , (e) => {
  
  e.preventDefault(); // 이벤트 중단

  const searchTerm = search.value;

  //searchTerm 변수가 true면서 빈값이 아닐때. 
  if(searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
      window.location.reload();
  }

})