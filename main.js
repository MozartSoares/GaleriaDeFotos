$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancelar').click(function() {
        $('form').slideUp();        
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const linkNovaImagem = $('#link_imagem').val(); /* .value no jquery é .val() que é uma função*/
        const novoItem = $('<li style= "display: none;"></li>')
        $(`<img src="${linkNovaImagem}" />`).appendTo(novoItem)/* appendTo insere o elemento entre os <li>*/
        $(`
            <div class="overlay"> 
                <a href="${linkNovaImagem}" target="_blank" title="Ver imagem em tela cheia">
                    Ver imagem em tela cheia
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000) /*medido em ms*/
        $('#link_imagem').val('')/* funcao val() facilita e encurta quando precisa fazer let = x.value */
        })
})