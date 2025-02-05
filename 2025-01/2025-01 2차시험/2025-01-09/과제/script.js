const search = document.querySelector("#filter");
const result = document.querySelector("#result");


// const res = await fetch('https://randomuser.me/api?results=50');
const defaultGetDataAPI = await fetch('https://randomuser.me/api?results=50');
const API_URL = 'https://randomuser.me/api?';
const userNameURL = 'username=';

result.addEventListener("submit" , async(e)=>{
  preventDefualt();
  let response = await res; 
})


async function getUserName( userName = "" ){
  let res = await fetch ( API_URL + userNameURL + userName)
                    .then( res => {
                      res.json();
                    })
                    .then( res => {
                      // 이름 (성 중간이름 마지막이름). 섬네일 가져오기
                      let { name, thumnail  }= res
                    });
  
}