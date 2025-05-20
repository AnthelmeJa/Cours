
document.addEventListener('DOMContentLoaded', function() {
    let elementDOM = document.querySelector('.button');
    
    let isShown = false;
    elementDOM.addEventListener('click', function(event) {
        console.log(event);
        let squareElement = document.querySelector('.lime-square');
        
        // On gère le changement d'état
        isShown = !isShown;
        
        // On gère l'affichage
        if (isShown) {
            squareElement.classList.add('visible');
        } else {
            squareElement.classList.remove('visible');
        }
    });
});

// Méthode 2
document.addEventListener('DOMContentLoaded', function() {
    let elementDOM = document.querySelector('.button');
    
    elementDOM.addEventListener('click', function(event) {
        let squareElement = document.querySelector('.lime-square');
        squareElement.classList.toggle('visible');
    });
});
 
