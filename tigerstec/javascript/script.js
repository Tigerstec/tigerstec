$(document).ready(function() {
    const modal = new bootstrap.Modal(document.getElementById('servicoModal'), {
        backdrop: 'static',
        keyboard: false
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
});