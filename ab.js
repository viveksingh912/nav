let ul=document.querySelector("ul");
let visible=document.querySelector(".visible");
let burger=document.querySelector(".burger");
burger.addEventListener('click',()=>{
    ul.classList.toggle('visible');
})