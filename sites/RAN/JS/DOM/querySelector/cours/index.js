document.addEventListener('DOMContentLoaded', function () {
    // On évite d'utiliser les id pour la maintenabilité du code
    let headerDOM = document.querySelector('#idHeader');
    console.log(headerDOM);
    
    // On utilise surtout une classe en premier dans le sélecteur
    let footerDOM = document.querySelector('.footer');
    console.log(footerDOM);
    
    let titreSiteDOM = document.querySelector('.header h1');
    console.log(titreSiteDOM);
    
    // On évite d'utiliser les tags pour la maintenabilité du code
    let articlesDOM = document.querySelectorAll('article');
    console.log(articlesDOM);
});
