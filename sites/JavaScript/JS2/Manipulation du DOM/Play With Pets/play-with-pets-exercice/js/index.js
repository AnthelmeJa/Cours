/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Il s'agit de plusieurs petits exercices indépendants.

*/
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    
     // Exercice 1 : Modale
    // Lorsqu'on clique sur le bouton d'aide (identifiant : help-button)
    // Ouvrir la modale (identifiant popup-help)
    // Lorsque'on clique sur la croix en haut à droite de la modale,
    // (elle porte la classe js-close-button)
    // Fermer la modale

    let buttonHelp = document.querySelector(".help-button");
    let popUpHelp = document.querySelector(".popup-help");
    let closePop= document.querySelector(".js-close-button");
    
    buttonHelp.addEventListener("click", function(event){
        popUpHelp.classList.add("visible")
    });
    
    closePop.addEventListener("click", function(event){
        popUpHelp.classList.remove("visible")
    });
    
    

    // Exercice 2 : Couverture
    // La faire défiler de gauche à droite avec les flèches
    // L'image est contenue dans un élément qui a la classe .js-main-cover
    
    let chat= document.querySelector(".js-main-cover img");
    let deplacement=0;
    
    document.addEventListener("keydown",(event) =>{
        let code =event.code
        console.log(event)
        if (code ==="ArrowLeft"){
            if(deplacement>-300){
                deplacement-=10
            chat.style.transform=`translateX(${deplacement}px)`;
            }
        }else if (code ==="ArrowRight"){
            if(deplacement<300){
            deplacement+=10
            chat.style.transform=`translateX(${deplacement}px)`;
            }
        }
    });
    console.log(deplacement)

    // Exercice 3 : Les races de chat
    // Afficher la bulle sur le chat au clic sur le bouton
    // L'élément est accessible via la classe .js-race-chat-cover
    let buttonBulle= document.querySelector(".js-race-chat-cover button");
    let divBulle =document.querySelector(".js-race-chat-cover");
    
     buttonBulle.addEventListener("click", function(event){
        divBulle.classList.toggle("visible")
    });
    
    
    // Exercice 4 : Les races de chat
    // Si on clique sur l'image, changer la photo
    // L'image est contenue dans un élément qui a la classe .js-race-chat-cover
    let imgChat= document.querySelector(".js-race-chat-cover img");
    
    imgChat.addEventListener("click", function(event){
        imgChat.src="images/labradors.jpg";
    });
    
    

    // Exercice 5 : Les races de chat
    // Dans la liste, Mettre en gras le Sacré de Birmanie et le Tigré
    // La liste est accessible via la classe .js-race-chat-list
    
    
    let sacre =document.querySelector(".js-race-chat-list li:nth-child(6)")
    let tigre =document.querySelector(".js-race-chat-list li:Last-child")
    sacre.style.fontWeight="Bold";
    tigre.style.fontWeight="Bold";

});
