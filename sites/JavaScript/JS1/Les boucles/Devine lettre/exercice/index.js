/**************************************************************/
/*                        Consignes                           */
/**************************************************************/
/*

L'objectif de cet exercice est de créer un jeu de devine-lettre.

On demande à l'utilisateur de deviner une lettre
jusqu'à ce qu'il la trouve.

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// Sélectionne une lettre au hasard dans l'alphabet
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let lettreAtrouver = alphabet.charAt(
  Math.ceil(Math.random() * 26) - 1
);

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
let choixUser = window.prompt("Ecrivez un lettre pour essayer de deviné");
// Tant que l'utilisateur n'a pas trouvé la lettre
while (choixUser !== lettreAtrouver){
    choixUser = window.prompt("Ecrivez un lettre pour essayer de deviné");
}
console.log("GG , tu as gagné");
// On demande à l'utilisateur de deviner la lettre


// On affiche un message de bravo si l'utilisateur a trouvé la lettre
let choixUserAgain = window.prompt("Voulez-vous rejouer ? (oui -non)");

if(choixUserAgain === "oui"){
        lettreAtrouver = alphabet.charAt(
      Math.ceil(Math.random() * 26) - 1
    );
    choixUser = window.prompt("Ecrivez un lettre pour essayer de deviné");
    while (choixUser !== lettreAtrouver){
    choixUser = window.prompt("Ecrivez un lettre pour essayer de deviné");
    }
    console.log("GG , tu as gagné");
}
// BONUS : Proposer à l'utilisateur s'il veut continuer de jouer


