const s = document.querySelectorAll(".slide");

let i = 0;

function m() {

    s.forEach(x => x.classList.remove("active"));

    s[i].classList.add("active");

    // Sempre volta para o topo quando trocar de foto
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

document.querySelector(".next").onclick = () => {

    i = (i + 1) % s.length;

    m();

}

document.querySelector(".prev").onclick = () => {

    i = (i - 1 + s.length) % s.length;

    m();

}

setInterval(() => {

    i = (i + 1) % s.length;

    m();

}, 5000);