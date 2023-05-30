const carrinho = [];
    
    
function adicionarItem(id, nome, preco) {
    const item = {id, nome, preco, quantidade: 1};
    const index = carrinho.findIndex(item => item.id === id);
    if (index !== -1) {
        carrinho[index].quantidade++;
    } else {
        carrinho.push(item);
    }
    atualizarCarrinho();
}

function removerItem(id) {
    const index = carrinho.findIndex(item => item.id === id);
    if (index !== -1) {
        carrinho.splice(index, 1);
        atualizarCarrinho();
    }
}

function diminuirQuantidade(id) {
    const index = carrinho.findIndex(item => item.id === id);
    if (index !== -1) {
        carrinho[index].quantidade--;
        if (carrinho[index].quantidade === 0) {
            carrinho.splice(index, 1);
        }
        atualizarCarrinho();
    }
}

function aumentarQuantidade(id) {
    const index = carrinho.findIndex(item => item.id === id);
    if (index !== -1) {
        carrinho[index].quantidade++;
        atualizarCarrinho();
    }
}

function atualizarCarrinho() {
    const carrinhoElemento = document.getElementById('carrinho');
    carrinhoElemento.innerHTML = '';

    let total = 0;
    carrinho.forEach(item => {


        const liItem = document.createElement('li')
        liItem.setAttribute('class', 'li-item-carrinho')
        
        const div1Carrinho = document.createElement('div')
        div1Carrinho.setAttribute('class', 'div1-item-carrinho')

        const nomeItemCarrinho = document.createElement('p')
        nomeItemCarrinho.innerHTML = `${item.nome} (${item.quantidade}x)`

        const valorItemCarrinho = document.createElement('p')
        valorItemCarrinho.innerHTML = `R$ ${item.preco}`

        div1Carrinho.appendChild(nomeItemCarrinho)
        div1Carrinho.appendChild(valorItemCarrinho)



        const div2Carrinho = document.createElement('div')
        div1Carrinho.setAttribute('class', 'div1-item-carrinho')

        const spanRemover = document.createElement('span')
        spanRemover.setAttribute('class', 'span-remover')
        spanRemover.innerHTML = 'Remover'
        spanRemover.onclick = () => removerItem(item.id);

        const btnAdd = document.createElement('button')
        btnAdd.setAttribute('class', 'btn-acao-carrinho')
        btnAdd.innerHTML = '+'
        btnAdd.onclick = () => aumentarQuantidade(item.id);

        const btnRemove = document.createElement('button')
        btnRemove.setAttribute('class', 'btn-acao-carrinho')
        btnRemove.innerHTML = '-'
        btnRemove.onclick = () => diminuirQuantidade(item.id);

        div2Carrinho.appendChild(spanRemover)
        div2Carrinho.appendChild(btnRemove)
        div2Carrinho.appendChild(btnAdd)

        liItem.appendChild(div1Carrinho)
        liItem.appendChild(div2Carrinho)

        carrinhoElemento.appendChild(liItem)



        total += item.preco * item.quantidade;
    });

    // Exibir o total no carrinho
    const totalElemento = document.createElement('p');
    totalElemento.innerHTML = `Total: R$ ${total}`;
    totalElemento.setAttribute('class', 'total-carrinho')
    carrinhoElemento.appendChild(totalElemento);





    // Construir a mensagem do compartilhamento com os itens do carrinho

    function obterItensCarrinho() {
    return carrinho;
    }

    const itens = obterItensCarrinho(); // Função fictícia para obter os itens do carrinho
    let mensagem = 'Olá, estou interessado em fazer uma compra! Meu carrinho: \n \n';
    itens.forEach(item => {

        mensagem += `- ${item.quantidade}x ${item.nome}: R$ ${item.preco*item.quantidade} \n \n`
        // mensagem += `- ${item.nome} (${item.quantidade}x): R$ ${item.preco} \n \n`;
    });
    mensagem += `*Total:* R$ ${total.toFixed(2)}`; // Incluir o valor total na mensagem

    // Atualizar o link do WhatsApp com a mensagem do carrinho
    const linkWhatsApp = document.getElementById('link-whatsapp');
    const numeroTelefone = ''; // Substitua pelo seu número de telefone
    const mensagemCodificada = encodeURIComponent(mensagem);
    linkWhatsApp.href = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemCodificada}`
}