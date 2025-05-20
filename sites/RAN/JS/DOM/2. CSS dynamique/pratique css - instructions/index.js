// RAPPEL : S'assurer que le DOM est chargé en mémoire avant de jouer avec
    let boxDom= document.querySelector(".red-square");
    // Exercice 1 : Positionner le carré de 150px vers la droite
    boxDom.style.left="150px";
    // Exercice 2 : Positionner le carré de 100px vers le bas
    boxDom.style.top="100px";
    // Exercice 3 : Mettre le symbole 😊 dans le carré
    boxDom.innerHTML += "\ud83d\ude0a";
    // Exercice 4 : Changer la taille du carré en 300px de largeur et 300px de haut
    boxDom.style.height= "300px";
    boxDom.style.width= "300px";
    // Exercice 5 : Ajouter en image de fond, l'image fournie
    /*let imageChat = document.createElement("img");
    imageChat.src="cat.jpg";
    boxDom.appendChild(imageChat);*/
    boxDom.style.backgroundImage= "url(cat.jpg)";
    
    
   
    
