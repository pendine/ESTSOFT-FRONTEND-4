/*
// let tagsEl = document.querySelector('.tags');
// let textarea = document.querySelector('.textinputer');
// textarea.addEventListener('keyup' , function(){
//     createTag(event.target.value);
// })
// function createTag(param1){
//     console.log('키보드 이벤트 감지');
//     const tags = param1.split(',').filter(tag => tag.trim() !=='');
//     tagsEl.innerHTML = '';
//     tags.forEach(tag =>{
//         console.log("tag : " + tag);
//         const tagEl = document.createElement('span');
//         tagEl.classList.add('tag');
//         tagEl.innerHTML = tag;
//         tagsEl.appendChild(tagEl);
//     })
// }
*/
let tagsEl = document.querySelector('#tags');
let textarea = document.querySelector('#textarea');

textarea.addEventListener('keyup', function(event){
    console.log(event.target);
    createTag(event.target.value);
})

function createTag(param1){
        //변수의 위치를 조정하는 이유중 하나는 메모리 절약을 위함임
        const tags = param1.split(',').filter(tag => tag.trim() !== '');

        tagsEl.innerHTML ='';
    
        tags.forEach(tag =>{
            console.log("태그내용 : " + tag);
            const tagEl = document.createElement('span');
            tagEl.classList.add('tag');
            tagEl.innerText = tag;
            tagsEl.appendChild(tagEl);
        })
        console.log("태그's 내용 : " + tags);
}