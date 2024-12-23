const pwShow = document.querySelectorAll('.eye-icon'),
      forms = document.querySelectorAll(".forms"),
      links = document.querySelectorAll(".link");

pwShow.forEach(icon =>{
  icon.addEventListener('click' , ()=>{
    console.log(icon.parentElement.parentElement);
    let pwFields = icon.parentElement.
    parentElement.querySelectorAll(".password");
    
    pwFields.forEach(password => {
      if(password.type==="password"){
        password.type = "text";
        icon.classList.replace("bx-hide", "bx-show");
      }else{
        password.type = "password";
        icon.classList.replace("bx-show", "bx-hide");
      }
    });
  });

})

links.forEach( link => {
  console.log(link);
// form태그 내부에서는 버튼을 누르면
// submit 처리가 됨
  link.addEventListener("click" , function(e){
    e.preventDefault(); // submit처리 방지
    forms.classList.toggle("show-signup");
  });

})
