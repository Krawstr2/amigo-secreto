let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;
    listaAmigos.push(amigo);
    document.getElementById("amigo").value = "";

    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let amigo = listaAmigos[i];
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = "O amigo secreto é: " + amigoSecreto;
}
