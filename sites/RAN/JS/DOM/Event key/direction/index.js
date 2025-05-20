// Si la touche appuyée est N, afficher 'Nord' dans le carré ET mettre en fond la couleur bleu glace

// Si la touche appuyée est E, afficher 'Est' dans le carré ET mettre en fond la couleur rouge foncé

// Si la touche appuyée est S, afficher 'Sud' dans le carré ET mettre en fond la couleur jaune

// Si la touche appuyée est O, afficher 'Ouest' dans le carré ET mettre en fond la couleur bleu foncé

// Si la touche appuyée n'est aucune des 4 précédentes, afficher Inconnu dans le carré ET mettre en fond la couleur par défaut

document.addEventListener('DOMContentLoaded', function() {
    
    document.addEventListener('keydown', function(event) {
        // Code touche appuyée
        let code = event.code;
        console.log(code);
        
        // Récupérer l'élément HTML
        let element = document.querySelector('.square');
        console.log(element);
        
         if (code === 'KeyW') {
            element.innerHTML="La";
            element.style.backgroundColor="red"
        }else
        if (code === 'KeyD') {
           element.innerHTML="Bretagne"
           element.style.backgroundColor="yellow"
        }else
        if (code === 'KeyS') {
            element.innerHTML="vous"
            element.style.backgroundColor="blue"
        }else
        if (code === 'KeyA') {
            element.innerHTML="aime"
            element.style.backgroundColor="pink"
        }
    });
    
});
