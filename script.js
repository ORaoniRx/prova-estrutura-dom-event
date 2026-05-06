const botaoMostrar = document.getElementById("btn-mostrar");
const extra = document.getElementById("extra");

botaoMostrar.addEventListener("click", () => {
    if (extra.style.display === "block") {
        extra.style.display = "none";
        botaoMostrar.textContent = "Mostrar mais";
    } else {
        extra.style.display = "block";
        botaoMostrar.textContent = "Mostrar menos";
    }
});

const botaoTema = document.getElementById("btn-tema");
const body = document.getElementById("body");

botaoTema.addEventListener("click", () => {
    body.classList.toggle("dark");
});

const contato = document.getElementById("btn-contato");

contato.addEventListener("click", () => {
    alert("Simulação de contato!!");
});