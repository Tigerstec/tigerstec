// Função para abrir o formulário e resetar os campos
document.getElementById('abrirFormulario').addEventListener('click', function() {
    document.body.classList.add('escurecido');
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('part1').style.display = 'block';
    document.getElementById('part2').style.display = 'none';
    document.getElementById('part3').style.display = 'none';
    document.getElementById('mensagemErro').textContent = '';

    // Reseta os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('celular').value = '';
    document.getElementById('empresa').value = '';
    document.getElementById('projeto').value = '';

    // Reseta as imagens
    document.getElementById('imagemA').src ='../imagens/tigrepreto1.png';
    document.getElementById('imagemC').src ='../imagens/tigrepreto2.png';
});

// Função para fechar o formulário e restaurar o fundo
function fecharFormulario() {
    document.body.classList.remove('escurecido');
    document.getElementById('overlay').style.display = 'none';
}

// Função para ir para a segunda parte do formulário
function proximaParte() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;

    if (nome && email && celular) {
        const parte1 = document.getElementById('part1');
        parte1.classList.add('slide-out'); // Animação de saída

        setTimeout(() => {
            parte1.style.display = 'none';
            parte1.classList.remove('slide-out'); // Remove a animação de saída
            document.getElementById('part2').style.display = 'block';
            document.getElementById('imagemA').src = '../imagens/tigrelaranja1.png'; // Troca a imagem A para B
            document.getElementById('mensagemErro').textContent = '';
        }, 500); // Tempo da animação
    } else {
        document.getElementById('mensagemErro').textContent = 'Por favor, preencha todos os campos!';
    }
}

// Função para voltar para a primeira parte do formulário
function voltarParte() {
    const parte2 = document.getElementById('part2');
    parte2.classList.add('slide-out'); // Animação de saída

    setTimeout(() => {
        parte2.style.display = 'none';
        parte2.classList.remove('slide-out'); // Remove a animação de saída
        document.getElementById('part1').style.display = 'block';
        document.getElementById('imagemA').src = '../imagens/tigrepreto1.png'; // Volta a imagem B para A
        document.getElementById('mensagemErro').textContent = '';
    }, 500); // Tempo da animação
}

// Função para enviar o formulário
function enviarFormulario() {
    const empresa = document.getElementById('empresa').value;
    const projeto = document.getElementById('projeto').value;

    if (empresa && projeto) {
        const parte2 = document.getElementById('part2');
        parte2.classList.add('slide-out'); // Animação de saída

        setTimeout(() => {
            parte2.style.display = 'none';
            parte2.classList.remove('slide-out'); // Remove a animação de saída
            document.getElementById('part3').style.display = 'block';
            document.getElementById('imagemC').src = '../imagens/tigrelaranja2.png'; // Troca a imagem C para D
        }, 500); // Tempo da animação
    } else {
        document.getElementById('mensagemErro').textContent = 'Por favor, preencha todos os campos!';
    }
}

// Carrossel

new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });