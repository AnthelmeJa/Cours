document.addEventListener('DOMContentLoaded', function() {

    let popUps = document.querySelectorAll('.popup');
// 1. Pour chaque popup, lorsque l'utilisateur clique sur le bouton de fermeture x,
// masquer la popup en utilisant la classe appropriée

    let exit = document.querySelectorAll('.close-button');
    
    for (let i = 0; i < exit.length; i++){
        
        exit[i].addEventListener("click", function(){
            
        popUps[i].classList.remove("visible");    
            
 
        });
    }
// 2. Pour chaque bouton du menu, lorsque l'utilisateur clique dessus,
// afficher la popup correspondante (qui a la même position dans la liste)
// en utilisant la classe appropriée

    let elementsDOM = document.querySelectorAll('button');
    let elementDom = document.querySelectorAll('button');
    for (let i = 0; i < elementsDOM.length; i++){
        
        elementsDOM[i].addEventListener("click", function(){
           
        popUps[i].classList.add("visible");    
            
        });
    }
}); 