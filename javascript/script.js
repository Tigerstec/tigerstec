$(document).ready(function() {
    const modal = new bootstrap.Modal(document.getElementById('servicoModal'), {
        backdrop: 'static',
        keyboard: false
    });

        $('.navbar-nav .nav-link').on('click', function(e) {
            // Obtenha o destino do link
            var target = $(this).attr('href');
            
            // Verifique se estamos em uma tela pequena onde o menu está colapsado
            if ($('.navbar-toggler').is(':visible')) {
                // Feche o menu
                $('.navbar-collapse').collapse('hide');
                
                // Adicione um pequeno atraso para dar tempo para o menu fechar
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $(target).offset().top// Ajuste para compensar a altura da navbar
                    }, 200);
                }, 100);
                
                e.preventDefault(); 
            } else {

                $('html, body').animate({
                    scrollTop: $(target).offset().top 
                }, 200);
                
                e.preventDefault();
            }
        });

    // Função para abrir o formulário e resetar os campos
    $('#abrirFormulario').on('click', function() {
        $('body').addClass('escurecido');
        
        // Resetar os campos do formulário
        $('#nome').val('');
        $('#email').val('');
        $('#celular').val('');
        $('#empresa').val('');
        $('#projeto').val('');
        
        // Resetar as imagens
        $('#imagemA').attr('src', 'imagens/tigrepreto1.png');
        $('#imagemC').attr('src', 'imagens/tigrepreto2.png');
        $('#imagemC2').attr('src', 'imagens/tigrepreto2.png');
        
        // Mostrar a primeira parte e esconder as outras
        $('#part1').show();
        $('#part2').hide();
        $('#part3').hide();
        
        // Limpar mensagens de erro
        $('.mensagem-erro').text('');
        
        // Abrir o modal
        modal.show();
    });

    // Função para fechar o formulário
    function fecharFormulario() {
        $('body').removeClass('escurecido');
        modal.hide();
    }

    // Botões para fechar
    $('#btnFechar1, #btnFechar3').on('click', function() {
        fecharFormulario();
    });

    // Botão para continuar para a segunda parte
    $('#btnContinuar').on('click', function() {
        const nome = $('#nome').val();
        const email = $('#email').val();
        const celular = $('#celular').val();

        if (nome && email && celular) {
            $('#part1').addClass('slide-out');

            setTimeout(() => {
                $('#part1').hide().removeClass('slide-out');
                $('#part2').show();
                $('#mensagemErro').text('');
            }, 500);
        } else {
            $('#mensagemErro').text('Por favor, preencha todos os campos!');
        }
    });

    // Botão para voltar para a primeira parte
    $('#btnVoltar').on('click', function() {
        $('#part2').addClass('slide-out');

        setTimeout(() => {
            $('#part2').hide().removeClass('slide-out');
            $('#part1').show();
            $('#mensagemErro2').text('');
        }, 500);
    });

    // Botão para enviar o formulário
    $('#btnEnviar').on('click', function() {
        const empresa = $('#empresa').val();
        const projeto = $('#projeto').val();

        if (empresa && projeto) {
            $('#part2').addClass('slide-out');

            setTimeout(() => {
                $('#part2').hide().removeClass('slide-out');
                $('#part3').show();
            }, 500);
        } else {
            $('#mensagemErro2').text('Por favor, preencha todos os campos!');
        }
    });

    // Fechar o modal quando o usuário clicar no backdrop
    $('#servicoModal').on('hidden.bs.modal', function () {
        $('body').removeClass('escurecido');
    });

     // Carrossel
    new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween: 20, // Espaço entre os slides

        // Paginação
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },

        // Navegação
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

     /* AOS */  
    AOS.init({

        duration: 1000,       // Duração da animação (ms)
        easing: 'ease-in-out', // Curva de aceleração (pode usar 'ease', 'linear', etc.)
        once: false,         // Animação ocorre apenas uma vez
    });
    
});



