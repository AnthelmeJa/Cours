/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Implémenter le code du célèbre jeu de chifoumi.

Règles :
- Feuille gagne contre Pierre : La feuille enveloppe la pierre
- Pierre gagne contre Ciseaux : La pierre détruit les ciseaux
- Ciseaux gagne contre Feuille : Les ciseaux coupent la feuille

Algorithme à implémenter :
- Choix aléatoire de l'ordinateur entre : feuille / pierre / ciseaux
- Demander à l'utilisateur son choix entre : feuille / pierre / ciseaux
- Déterminer le vainqueur (égalité si l'ordinateur et le joueur ont choisi la même chose)
- Afficher le vainqueur

NOTE pour afficher, utiliser document.body.innerText = ''

*/
/**************************************************************/
/*                         Variables                          */
/**************************************************************/

let randomChoice = Math.floor(Math.random() * 3); // Retourne un nombre aléatoire entre 1 et 3

// Les variables à mettre ici...


const mainChoice =["pierre","feuille","ciseaux"];
let computerChoice = mainChoice[randomChoice];
const userChoice = window.prompt(" écrivez soit feuille / pierre / ciseaux");

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code du programme à écrire ici...

if(computerChoice === userChoice){
    document.body.innerText = "C'est une égalité";
}else if(userChoice === mainChoice[0] && computerChoice === mainChoice[2]){
    document.body.innerText = "Gagné";
}else if(userChoice === mainChoice[1] && computerChoice === mainChoice[0]){
    document.body.innerText = "Gagné";
}else if(userChoice === mainChoice[2] && computerChoice === mainChoice[1]){
    document.body.innerText = "Gagné";
}else{
    document.body.innerText = "Perdu";
}