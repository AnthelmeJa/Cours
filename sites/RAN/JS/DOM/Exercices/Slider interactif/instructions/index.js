// IMPORTANT : Toujours commencer par ajouter le listener sur l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
// 1. Initialisation de la valeur affichée
// - Récupérer la valeur de l'élément ayant la classe "js-number-input"
// - La recopier dans l'élément ayant la classe "js-number-display"
        let input = document.querySelector(".js-number-input");
        let display = document.querySelector(".js-number-display");
        let valeur = input.value;
        console.log(input.value)
        display.innerText = valeur;





// 2. Mise à jour automatique de la valeur affichée lorsque l'utilisateur bouge le slider
//   - Ajouter un listener sur l'événement "change" de l'élément ayant la classe "js-number-input"
//   - Récupérer la valeur de l'élément "js-number-input"
//   - La recopier dans l'élément ayant la classe "js-number-display"
    input.addEventListener("change", function(event){
    
    let newValeur = input.value;
    display.innerText = newValeur;
    
    
    });
});