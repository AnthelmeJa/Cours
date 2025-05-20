


// 1. Au premier clic, mettre la couleur de fond du carré à rouge

// 2. Au second clic, mettre la couleur de fond du carré à bleu

// 3. Au troisième clic, remettre la couleur de fond par défaut

// 4. Au quatrième clic, on reboucle à 1.

// etc...

document.addEventListener('DOMContentLoaded', function() {
    
    
     let elementDOM = document.querySelector('.button');
     let isShown = 0;
     
     elementDOM.addEventListener('click', function(event) {
        console.log(event);
        let squareElement = document.querySelector('.square');
        isShown++
        
        // On gère l'affichage
        if (isShown===1) {
            squareElement.classList.add('rouge');
        } else if (isShown===2){
            squareElement.classList.remove('rouge');
            squareElement.classList.add('bleu');
        } else{
             isShown=0;
              squareElement.classList.remove('bleu');
        };
    });   
});
