var a = window.document.getElementById("area");
a.addEventListener("Click", Clicar);
a.addEventListener("mouseout", Sair);
a.addEventListener("mouseenter", Entrar);

function Clicar() {
    a.innerText = "Clicou"
    a.style.backgroundColor = "yellow"
}

function Entrar() {
    a.innerText = "Entrou"
    a.style.backgroundColor = "cadetblue"
}

function Sair() {
    a.innerText = "Sair"
    a.style.backgroundColor = "cadetblue"
}

