const btnMostrarCarrinho = document.querySelector('#btn-mostrar-carrinho')
const btnFecharCarrinho = document.querySelector('#btn-fechar-carrinho')
const janelaCarrinho = document.querySelector('.janela-carrinho')

function mostrarCarrinho() {
    console.log('mostrando carrinho')
    janelaCarrinho.classList.add('janela-carrinho-ativada')
}

function fecharCarrinho() {
    janelaCarrinho.classList.remove('janela-carrinho-ativada')
}