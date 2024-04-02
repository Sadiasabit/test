const navTarget=document.querySelector(".nav-target");
const navUl=document.querySelector(".nav-ul");

navTarget.addEventListener("click",function(){
    if(navUl.classList.contains("show-ul")){
        navUl.classList.remove("show-ul");
    }else{
        navUl.classList.add("show-ul");
    }
});