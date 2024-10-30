$(document).ready(function(){ // função para adicionar eventos utilizando jquery

    $('header button').click(function(){ //isso é um callback. Uma função sendo passada a outra função.
        $('form').slideDown();
    })

    $('#botao_cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){ //outra forma de adicionar evento. 
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); // no jquery o value = val é uma função.
        const novoItem = $('<li style="display: none"></li>'); // display none para img não aparecer. 
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">
                    ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); // função para img fazer animação na tela. dentro da função esta o tempo para o elemnto surgir.
        $('#endereco-imagem-nova').val(''); // estrtura para limpar campo.    
    })
})