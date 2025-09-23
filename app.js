let nomeAmigoSecreto = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    console.log(nome);
    limparCampo();
    if (nome.trim() === '') {
        document.getElementById('verificacao').removeAttribute('hidden');
    } else {
        nomeAmigoSecreto.push(nome);
        listaDeAmigos(nome);
        document.getElementById('verificacao').setAttribute('hidden', true);
    }
}

function limparCampo() {
    let nome = document.querySelector('input');
    nome.value = '';
}

function listaDeAmigos(nome) {
    let amigos = document.getElementById('lista');
    amigos.innerHTML = '';

    for(let amigo of nomeAmigoSecreto) {
        let lista = document.createElement('li');
        lista.textContent = amigo;
        amigos.appendChild(lista);
    }
    // let lista = document.createElement('li');
    // lista.textContent = nome;
    // amigos.appendChild(lista);
}