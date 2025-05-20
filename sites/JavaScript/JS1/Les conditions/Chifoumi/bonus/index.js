/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Implémenter le célèbre jeu de chifoumi en trois manches.

Ajouter au code de la partie 1, la gestion des 3 manches.
Lors de chaque manche :
- Calculer le score de l'ordinateur et du joueur
- Afficher le score final


*/
/**************************************************************/
/*                         Variables                          */
/**************************************************************/


// Les variables à mettre ici...


const mainChoice =["pierre","feuille","ciseaux"];

let resultat = 0;
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code du programme à écrire ici...
for(let tour=0; tour<3;tour++){
    let randomChoice = Math.floor(Math.random() * 3);
    
    let computerChoice = mainChoice[randomChoice];
    let userChoice = window.prompt(" écrivez soit feuille / pierre / ciseaux");
    
    if(computerChoice === userChoice){
        document.body.innerText = "C'est une égalité";
    }else if(userChoice === mainChoice[0] && computerChoice === mainChoice[2] ||
             userChoice === mainChoice[1] && computerChoice === mainChoice[0] ||
             userChoice === mainChoice[2] && computerChoice === mainChoice[1]){
                document.body.innerText = "Gagné";
                resultat++
   }else{
        document.body.innerText = "Perdu";
    }
    
    
   
}
document.body.innerText = "le match est fini votre score est de "+resultat+ " sur 3";