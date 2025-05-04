document.addEventListener('DOMContentLoaded', () => {
    const inputNome = document.getElementById('nome');
    const inputQuantidade = document.getElementById('quantidade');
    const lista = document.getElementById('lista-itens');
    const botaoAdicionar = document.getElementById('botao1');
    const botaoLimpar = document.getElementById('botao2');


    botaoAdicionar.onclick = (e) => {

        e.preventDefault();

        const nome = inputNome.value.trim();
        const quantidade = inputQuantidade.value.trim();


        if (!nome || !quantidade) {
            alert('Preencha todos os campos.');
            return;
        }

        const item = document.createElement('li');
        item.textContent = `${nome} (${quantidade})`;


        item.onclick = () => item.classList.toggle('riscado');

        lista.appendChild(item);


        inputNome.value = '';
        inputQuantidade.value = '';
    };


    botaoLimpar.onclick = () => {
        lista.innerHTML = '';
    };
});
