const img = document.querySelector(".parallax-img"); // Efecto Parallax

document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 30;
    let y = (window.innerHeight / 2 - e.pageY) / 30;
    
    img.style.transform = `translate(${x}px, ${y}px) rotate(${x/10}deg)`;
});

const titulo = document.querySelector(".titulo-scroll");

function activarTitulo() {
    titulo.style.transform = "translateX(0)";
    titulo.style.opacity = "1";
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        activarTitulo();
    }
});

window.addEventListener("load", () => {
    setTimeout(activarTitulo, 500);
});

