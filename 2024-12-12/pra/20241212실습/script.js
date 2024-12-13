var hourEl = document.querySelector('.hour');
var minEl = document.querySelector('.minute');
var secondEl = document.querySelector('.second');
var timeEl = document.querySelector('.time');
var dateEl = document.querySelector('.date');
// 다크모드 컨트롤을 위해 선언
var toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function(event){

    var html=document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        event.target.innerHTML = 'Dark mode';
    }else{
        html.classList.add('dark');
        event.target.innerHTML='Light mode';
    }

})