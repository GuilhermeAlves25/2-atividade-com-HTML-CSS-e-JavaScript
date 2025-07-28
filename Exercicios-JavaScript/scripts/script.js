document.addEventListener('DOMContentLoaded', () => {

    console.log("Página carregada e script pronto para execução!");


    const botaoMudarTexto = document.getElementById('botaoMudarTexto');
    const paragrafo = document.getElementById('paragrafoExemplo');
    if (botaoMudarTexto && paragrafo) {
        botaoMudarTexto.addEventListener('click', () => {
            paragrafo.textContent = 'O texto foi alterado com sucesso pelo JavaScript!';
        });
    }


    const caixaColorida = document.getElementById('caixaColorida');
    if (caixaColorida) {
        caixaColorida.addEventListener('mouseover', () => {
            caixaColorida.style.backgroundColor = 'lightblue';
        });
        caixaColorida.addEventListener('mouseout', () => {
            caixaColorida.style.backgroundColor = 'lightgray';
        });
    }


    const botaoAdicionar = document.getElementById('botaoAdicionar');
    const lista = document.getElementById('minhaLista');
    if (botaoAdicionar && lista) {
        let contadorItem = 3;
        botaoAdicionar.addEventListener('click', () => {
            const novoItem = document.createElement('li');
            novoItem.textContent = `Item número ${contadorItem++}`;
            lista.appendChild(novoItem);
        });
    }


    const listaRemovivel = document.getElementById('listaRemovivel');
    if (listaRemovivel) {
        listaRemovivel.addEventListener('click', (event) => {
            if (event.target.classList.contains('botaoRemover')) {
                const itemParaRemover = event.target.parentElement;
                itemParaRemover.remove(); // .remove() é uma forma mais moderna de remover
            }
        });
    }


    const botaoAlternar = document.getElementById('botaoAlternar');
    const elementoVisivel = document.getElementById('elementoVisivel');
    if (botaoAlternar && elementoVisivel) {
        botaoAlternar.addEventListener('click', () => {
            elementoVisivel.classList.toggle('oculto');
        });
    }


    const formulario = document.getElementById('meuFormulario');
    const campoEmail = document.getElementById('email');
    const erroEmail = document.getElementById('erroEmail');
    if (formulario && campoEmail && erroEmail) {
        formulario.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio real do formulário

            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailValido = regex.test(campoEmail.value);

            if (!emailValido) {
                erroEmail.textContent = 'Por favor, insira um email com formato válido.';
                campoEmail.classList.add('invalido');
            } else {
                erroEmail.textContent = '';
                campoEmail.classList.remove('invalido');
                alert('Formulário enviado com sucesso! (Email: ' + campoEmail.value + ')');
                formulario.reset();
            }
        });
    }


    const imagemDinamica = document.getElementById('imagemDinamica');
    if (imagemDinamica) {
        const urlOriginal = 'images/imagem_original.jpg';
        const urlNova = 'images/imagem_nova.jpg';

        imagemDinamica.addEventListener('mouseover', () => {
            imagemDinamica.src = urlNova;
        });
        imagemDinamica.addEventListener('mouseout', () => {
            imagemDinamica.src = urlOriginal;
        });
    }


    const botaoContador = document.getElementById('botaoContador');
    const displayContador = document.getElementById('contador');
    if (botaoContador && displayContador) {
        let cliques = 0;
        botaoContador.addEventListener('click', () => {
            cliques++;
            displayContador.textContent = cliques;
        });
    }


    const elementoMovivel = document.getElementById('elementoMovivel');
    if (elementoMovivel) {
        const passo = 10;
        let posicaoVertical = 0;
        let posicaoHorizontal = 0;

        document.getElementById('btnCima').addEventListener('click', () => {
            posicaoVertical -= passo;
            elementoMovivel.style.top = `${posicaoVertical}px`;
        });
        document.getElementById('btnBaixo').addEventListener('click', () => {
            posicaoVertical += passo;
            elementoMovivel.style.top = `${posicaoVertical}px`;
        });
        document.getElementById('btnEsquerda').addEventListener('click', () => {
            posicaoHorizontal -= passo;
            elementoMovivel.style.left = `${posicaoHorizontal}px`;
        });
        document.getElementById('btnDireita').addEventListener('click', () => {
            posicaoHorizontal += passo;
            elementoMovivel.style.left = `${posicaoHorizontal}px`;
        });
    }


    const modal = document.getElementById('modal');
    const botaoAbrir = document.getElementById('abrirModal');
    const botaoFechar = document.querySelector('.fechar-modal');
    if(modal && botaoAbrir && botaoFechar) {

        const toggleModal = () => {
            modal.classList.toggle('visivel');
        }

        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                toggleModal();
            }
        });
    }
});