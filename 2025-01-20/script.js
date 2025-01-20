const getArticle = document.querySelector(".articles");
const toggleBtn = document.querySelector('.btn');
let isDark = false;

const getData = async ()=>{ 
  try{
    const response = await fetch('./data.json');
    const jsonData = await response.json();

    console.log(jsonData);

    getArticle.innerHTML = setPost(jsonData);

  }catch(error){
    console.log('데이터 호출 오류 : ' + error);
  }
}

const setPost = (jsonData) => {
  let htmlEle = '';
  jsonData.forEach( ele => {

    // let date = new Date( ele.date).toLocaleDateString();
    let date = new Date( ele.date);
    htmlEle += `
      <div class='post'>
        <h2> ${ele.title}</h2>
        <div class='post-info'><span> ${date.toUTCString()}</span>
         <p> ${ele.snippet}  </p>
        </div>
        
      </div>
    `;
  })

  return htmlEle;
}

const body = document.querySelector( "body" );

toggleBtn.addEventListener('click' , ()=>{
  console.log("버튼눌림");
  
  isDark = !isDark;

  if(isDark) { 
    body.classList.add('dark-theme');
  }
  else{
    body.classList.remove('dark-theme');
  }
})

document.addEventListener('DOMContentLoaded', ()=>{
  getData();
})