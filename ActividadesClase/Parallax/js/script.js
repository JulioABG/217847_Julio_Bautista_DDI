const titulo = document.querySelector("#titulo");
const background = document.querySelector("#background");
const coffe1 = document.querySelector("#coffe1");

window.addEventListener("scroll", (event)=>{
    let scrolly = window.scrollY;
    
    titulo.style.right = scrolly * 12 + "px";
    background.style.bottom = scrolly * -2 +"px";
    coffe1.style.bottom = scrolly * 7 + "px";
})