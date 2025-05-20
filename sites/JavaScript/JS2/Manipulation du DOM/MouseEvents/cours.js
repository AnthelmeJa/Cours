function onButtonClick(event) {
    console.log(event);
    
    let button = document.querySelector('.js-button');
    
    // Enlève le listener, ainsi on peut cliquer qu'une fois sur le bouton
    button.removeEventListener('click', onButtonClick);
}

document.addEventListener('DOMContentLoaded', function(event) {
    let button = document.querySelector('.js-button');
    
    /*
    button.addEventListener('click', function(event) {
        console.log(event);
    });
    */
    // Ajouter un listener : passer la signature de la fonction cad son nom
    // Attention on n'appelle pas la fonciton ici
    button.addEventListener('click', onButtonClick);
    
    
    /*
    button.addEventListener('mousemove', function (event) {
        console.log(event);
    });
    */
    
    /*
    document.addEventListener('mousemove', function (event) {
        console.log(event);
    });
    */
    
    document.addEventListener('dblclick', function(event) {
        console.log(event);
    });
    
    
});
