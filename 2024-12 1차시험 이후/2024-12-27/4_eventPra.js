const ratings = document.querySelectorAll('.rating');
const btn = document.querySelector('.btn');
const ratingCon = document.querySelector('.ratings-container');

const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';


btn.addEventListener('click' , function(e){
  console.log("submit clicked");
  // ratingCon.innerHTML = feedback();
  // panel.innerHTML = feedback();
  panel.innerHTML = `
      <div class="fa fa-heart"></div>
      <strong>Thank you</strong>
      <strong>Rating : ${selectedRating}</strong>
      <p>어쩌구 저쩌구</p>
  `;
})

// ratingCon.addEventListener('click' , function(e){
//   // let target = e.target; //div를 찍으면 div, 문자는 문자, 그림은 그림으로 들어옴
//   // 누구를 찍던간 small태그의 문자열을 획득해야함
//   if( // 부모 요소중 rating찾기
//     e.target.parentNode.classList.contains('rating')
//     && e.target.nextElementSibiling
//   ){
//     removeActive();
//     console.log(e);
//     e.target.parentNode.classList.add('active');
//     selectedRating = e.target.innerHTML;
//   }
//   else if( // 부모 요소중 rating찾기
//     e.target.parentNode.classList.contains('rating')
//     && e.target.previousSibiling 
//     && e.target.previousElementSibling.nodeName ==='IMG'
//   ){
//     removeActive();
//     console.log(e);
//     e.target.parentNode.classList.add('active');
//     selectedRating = e.target.innerHTML;
//   }
//   // console.log(target);
//   // console.log(selectedRating);
// })

// 개선
ratingCon.addEventListener('click' , function(e){
  //클릭된 요소의 부모 중 rating을 찾는법
  const rating = e.target.closest('.rating');
  if(rating){
    removeActive(rating); //활성화 업데이트
    rating.classList.add("active");
    selectedRating = rating.querySelector('small').innerHTML;
  }
  console.log("selected : " + selectedRating);
})

// function removeActive(){
//   for(let i =0; i<ratings.length; i++){
//     ratings[i].classList.remove('active');
//   }
//   console.log('removeActive');
// }

// 개선
function removeActive( select ){
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  })
  console.log('removeActive');
}

const feedback = () =>{
  let divCon = document.createElement('div');
  let heart = document.createElement('div');
  heart.classList.add('fa');
  heart.classList.add('fa-heart');
  let thank = document.createElement('h1');
  thank.innerHTML = "Thank you!";
  let ratingGrade = document.createElement('div');
  ratingGrade.innerHTML = "Rating : ";
  let text = document.createElement('p');
  text.innerHTML = "어쩌구저쩌구" ;
  divCon.appendChild( heart );
  divCon.appendChild( thank );
  divCon.appendChild( ratingGrade );
  divCon.appendChild( text );
  return divCon.innerHTML;
}