let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre.");
    input.focus();
    return;
  }

  amigos.push(nombre);
  input.value = "";
  actualizarLista();
  input.focus();
}

function eliminarAmigo(indice) {
  amigos.splice(indice, 1);
  actualizarLista();
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo ;
    
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.onclick = () => eliminarAmigo(index);
    
    li.appendChild(botonEliminar);
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un amigo antes de sortear.");
    return;
  }
  
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  document.getElementById("resultado").textContent = `Tu amigo secreto es: ${amigoSorteado}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("amigo");

  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      agregarAmigo();
    }
  });

  input.focus();
});
