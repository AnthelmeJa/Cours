/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

document.addEventListener('DOMContentLoaded', function(event) {
    
    let red = document.querySelector(".red");
    let move =document.querySelector("#moveDiv");
    let hide =document.querySelector("#hideModal");
    let modal = document.querySelector(".modal");
    let count=0
    
    move.addEventListener("click",function(event){
       count++
       modal.classList.remove("active");
       if (count===1){
           red.style.left="15rem";
       }else if (count===2){
           red.style.top="15rem";
       }else if (count===3){
           red.style.left="0";
       }else if(count===4){
           red.style.top="0";
           modal.classList.add("active");
           count=0
        }
    });
    
    
    
    hide.addEventListener("click",function(event){
      modal.classList.toggle("active");
    });
    
    
});