$(function() {
    var header = $('header[data-title="TVify"]') // Todos los elementos header que tengan el atributo data-title="TVify"

    var title = $('#app-header').find('h1') // Todos los elementos con id="app-header" y que contengan elementos <h1></h1>

    var selection = $('#app-header').not('.title') // Todos los elementos con id="app-header" y que no tengan class="title"

    $('p').filter('.text') // Todos los elementos <p></p> que tengan class="text"

    $('p')
        .filter('.text')
        .first();

    // Encadenando selecciones - Solo el primer elemento <p></p> con clase="text"

    $('p')
        .filter('.text')
        .has('a')
        .eq(1)

    // Encadenando selecciones - Solo el segundo elemento <p></p> con clase="text" y que contenga un elemento <a></a>
    // La funcion eq() sirve para seleccionar elementos por indice, el primer indice es el 0


    var a = $('<a></a>', {
            href: 'https://platzi.com',
            target: '_blank',
            html: 'Ir a Platzi'
        }) // Creando un elemento <a></a>

    // $('#app-body').append(a[0]) 
    // Haciendo un append del elemento antes creado al div con id="app-body"

    console.log(a.attr('href')) // Realizando un getter del atributo href=""

    a
        .attr('href', 'https://google.com')
        .html('Ir a Google')
        // Realizando un setter de los atributos y del texto

    var $h1 = $('h1').addClass('secondary')
        // agregando la class="secondary"

    // setTimeout(() => {
    //     $h1.removeClass('secondary') 
    //      removiendo la clas="secondary"
    // }, 2000);

    setTimeout(() => {
        // $h1.toggleClass('secondary')
        // con toggleClass si la clase existe la remueve y si no existe la agrega
    }, 2000);

    setInterval(() => {
        $h1.toggleClass('secondary')
            // con toggleClass si la clase existe la remueve y si no existe la agrega
    }, 2000);

    $h1.css({
        'font-size': '50px',
        'transition': '1s'
    })

    // Dos maneras equivalentes de agregar un elemento 
    // $('header#app-header')
    //     .append($('<p></p>', {
    //         html: 'Me acaban de crear'
    //     }))

    // $('<p></p>', {
    //     html: 'Me acaban de crear tambien'
    // }).appendTo($('header#app-header'))
});