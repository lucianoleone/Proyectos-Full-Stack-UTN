

const mensajeOcultoHTML = document.getElementById("mensajeOculto");
const btnVerHTML = document.getElementById("btnVer");

function    toggleMensaje() {
    mensajeOcultoHTML.classList.toggle('toggleVisible')
    btnVerHTML.innerText = btnVerHTML.innerText === "Mostrar" ? "Ocultar" : "Mostrar";
}

btnVerHTML.addEventListener("click", toggleMensaje);

