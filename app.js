let listaNumerosSorteados = [];
let quantidadeMaxNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio(quantidadeMaxNumeros);
let tentativas = 1;

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavaTentativa = tentativas > 1 ? 'tentativas' : 'tentativa apenas';
    let mensagemTentativas = `Você encontrou o número secreto! com ${tentativas} ${palavaTentativa}!`;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        limparResposta();
        tentativas++;
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function gerarNumeroAleatorio(numero) {
    let numeroEscolhido = parseInt(Math.random() * numero + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == quantidadeMaxNumeros) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparResposta() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(quantidadeMaxNumeros);
    limparResposta();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${quantidadeMaxNumeros}`);
}