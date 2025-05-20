// Ce tableau contient la couleur de fond de chaque élément :
// l'élément 0 aura red, l'élément 1 aura blue, ...
let colors = ['red', 'blue', 'yellow', 'green', 'salmon', 'orange', 'purple', 'pink', 'navy', 'gold'];

// Ce tableau contient la position top/left de chaque élément :
// l'élément 0 aura top/left 1 à 1, l'élément 1 aura top/left à 2, ...
let positions = [1, 2, 9, 4, 5, 8, 3, 10, 6, 7];

/******************************** TODO  ********************************/
// IMPORTANT : Toujours commencer par ajouter le listener sur l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    


   // Récupérer TOUS les éléments ayant la classe js-magic-square
   let allSquare = document.querySelectorAll(".js-magic-square");


   // boucle ici
   for(let i = 0 ;i < allSquare.length;i++) {
      allSquare[i].style.top = positions[i] + "em";
      allSquare[i].style.left = positions[i] + "em";
      allSquare[i].style.backgroundColor= colors[i];
   }
   
   
   
    if (code ===
   
   
});

