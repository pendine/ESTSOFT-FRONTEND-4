let btn = document.querySelector('.fetch-button');

btn.addEventListener('click', function(){
  let output = document.querySelector('#output');

  let spinner = document.createElement('div');
  spinner.classList.add('spinner');

  output.appendChild(spinner);

  setTimeout(function(){
    const data = {
      title : "데이터 로딩 완료",
      body : "데이터 로딩완료"
    }

    output.innerHTML = `
      <div class="data-container">
        <h2>${data.title}</h2>
        <p>${data.body}</p>
      </div>
    `
  }, 2000)

  // setTimeout( function(){
  //   output.removeChild(spinner);
  //   let datacon = document.createElement('div');
  //   datacon.classList.add('data-container');
  //   datacon.innerHTML= `<h2>데이터로딩<h2>
  //   <p>데이터 로딩 완료<p>`;
  //   output.appendChild(datacon);
  // }
  // , 2000);
});