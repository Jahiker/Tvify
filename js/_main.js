$(function() {

    // Submit Search Form
    $('#app-body')
        .find('.search-form')
        .submit(function(ev) {

            // Prevenir el evento submit por default que recarga la pagina
            ev.preventDefault()

            // Obteniendo el valor de la busqueda
            var busqueda = $(this)
                .find('input[type="text')
                .val()

        })

    var template = '<article class="tv-show">' +
        '<div class="left">' +
        '<img src=":img:" alt=":img alt:">' +
        '</div>' +
        '<div class="left info">' +
        '<h1>:name:</h1>' +
        ':summary:' +
        '</div>' +
        '</article>';

    // Ajax Request
    $.ajax('http://api.tvmaze.com/shows', {
        success: function(shows, textStatus, xhr) {

            // Getting the Shows Cards Container
            var tvShowsContainer = $('#app-body').find('.tv-shows')

            shows.forEach(show => {

                // Replacing values from the data
                var article = template
                    .replace(':name:', show.name)
                    .replace(':img:', show.image.medium)
                    .replace(':img alt:', show.name)
                    .replace(':summary:', show.summary)

                // Printing every show on inside the div with id="app-body"
                tvShowsContainer.append($(article))
            });
        }
    })

})