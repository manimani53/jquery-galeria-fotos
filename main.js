$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const urlImg = $('#url-img').val()
        const novoItem = $('<li style="display : none"></li>')
        $(`<img src = "${urlImg}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-img-link">
                <a href = "${urlImg}" target="_blank" title="ver imagem em tamnho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#url-img').val('')
    })
})