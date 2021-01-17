$(function() {

    // Getting the Shows Cards Container
    var tvShowsContainer = $('#app-body').find('.tv-shows')

    // Spinner loader animation
    var spinner = '<div class="loader">Loading...</div>'
    tvShowsContainer.append(spinner)

    // Funcion para renderizar las cards de los shows
    function renderShows(shows) {
        shows.forEach(show => {

            // Replacing values from the data
            var article = template
                .replace(':name:', show.name)
                .replace(':img:', show.image.medium)
                .replace(':img alt:', show.name)
                .replace(':summary:', show.summary)

            // Printing every show on inside the div with id="app-body"
            var $article = $(article)
            $article.hide();
            tvShowsContainer.append($article.fadeIn(1500))
        });
    }

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

            // First remove all the shows
            tvShowsContainer.find('.tv-show').remove()

            // Showing spinner loader animation
            tvShowsContainer.append(spinner)

            // Getting shows by search
            $.ajax('http://api.tvmaze.com/search/shows', {
                data: { q: busqueda },
                success: function(res, textStatus, xhr) {

                    // Modificando la respuesta para solo mostrar los shows
                    var shows = res.map((el) => {
                        return el.show;
                    })

                    // Setting Timeout for making a loading effect
                    setTimeout(() => {
                        tvShowsContainer.find('.loader').remove()
                        renderShows(shows)
                    }, 1000);

                }
            })

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

    // Ajax Request Shows Collection
    $.ajax('http://api.tvmaze.com/shows', {
        success: function(shows, textStatus, xhr) {

            // Removing the spinner loader animation
            tvShowsContainer.find('.loader').remove()

            // Render shows
            renderShows(shows)

        }
    })

})