let nomeAmigoSecreto = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    console.log(nome);
    if (nome.trim() === '') {
        document.getElementById('verificacao').removeAttribute('hidden');
        limparCampo();
    } else {
        nomeAmigoSecreto.push(nome);
        document.getElementById('verificacao').setAttribute('hidden', true);
        limparCampo();
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}
console.log('Teste')
function adicaoDeNomes() {

}
