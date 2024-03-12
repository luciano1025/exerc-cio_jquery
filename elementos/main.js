function claro () {
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    document.body.classList.remove("modo-escuro");
    document.body.classList.add("modo-claro");
}

function escuro () {
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    document.body.classList.remove("modo-claro");
    document.body.classList.add("modo-escuro");
}


$(document).ready(function() {

    function adicionarTarefa() {
        var novaTarefa = $('#forma').val();

        if (novaTarefa.trim() !== '') {
            var novoItem = $('<li>' + novaTarefa + '</li>');
            $('#listasTarefas').append(novoItem);
            $('#forma').val('');
        }
    }
    $('#adit').on('click', function () {
        adicionarTarefa();
    });

    $('#listasTarefas').on('click', 'li', function () {
        var textoTarefa = $(this).text();
        $(this).html(textoTarefa.slice(0, textoTarefa.length / 100) + '<span class="linhaMeio">' + textoTarefa.slice(textoTarefa.length / 100) + '</span>');
    });

    function limparLista() {
        $('#listasTarefas').empty();
    }

    $('#limparLista').on('click', function () {
        limparLista();
    });

    $('#forma').keypress(function(event) {
        if (event.which === 13) { 
            adicionarTarefa(); 
            event.preventDefault();
        };
    });

});



