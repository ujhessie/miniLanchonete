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
        const itemElemento = document.createElement('li');
        itemElemento.textContent = `${item.nome} - R$ ${item.preco} x ${item.quantidade}`;

      

        const diminuirBotao = document.createElement('button');
        diminuirBotao.textContent = '-';
        diminuirBotao.onclick = () => diminuirQuantidade(item.id);
        itemElemento.appendChild(diminuirBotao);


        const removerBotao = document.createElement('button');
        removerBotao.textContent = 'Remover';
        removerBotao.onclick = () => removerItem(item.id);
        itemElemento.appendChild(removerBotao);



        const aumentarBotao = document.createElement('button');
        aumentarBotao.textContent = '+';
        aumentarBotao.onclick = () => aumentarQuantidade(item.id);
        itemElemento.appendChild(aumentarBotao);

        carrinhoElemento.appendChild(itemElemento);

        total += item.preco * item.quantidade;
    });

    // Exibir o total no carrinho
    const totalElemento = document.createElement('li');
    totalElemento.textContent = `Total: R$ ${total}`;
    carrinhoElemento.appendChild(totalElemento);





    // Construir a mensagem do compartilhamento com os itens do carrinho

    function obterItensCarrinho() {
    return carrinho;
    }

    const itens = obterItensCarrinho(); // Função fictícia para obter os itens do carrinho
    let mensagem = 'Olá, estou interessado em fazer uma compra! Meu carrinho: \n';
    itens.forEach(item => {
        mensagem += `- ${item.nome} (${item.quantidade}x): R$ ${item.preco} \n`;
    });
    mensagem += `Total: R$ ${total.toFixed(2)}`; // Incluir o valor total na mensagem

    // Atualizar o link do WhatsApp com a mensagem do carrinho
    const linkWhatsApp = document.getElementById('link-whatsapp');
    const numeroTelefone = '98986025773'; // Substitua pelo seu número de telefone
    const mensagemCodificada = encodeURIComponent(mensagem);
    linkWhatsApp.href = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemCodificada}`
}