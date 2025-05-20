/**
 * Créer ici le projet « Hello You ».
 */
const aujd = new Date();
const annee= aujd.getFullYear();
const mois = aujd.getMonth() +1;
const jour = aujd.getDate();

const userFirstName = window.prompt("Hey ! Quel est votre prénom ?");
const userLastName = window.prompt("Hey ! Quel est votre nom ?");
const userAge = parseInt(window.prompt("Hey ! Quel est votre année de naissance ?"));
const userMois = parseInt(window.prompt("Hey ! Quel est votre mois de naissance ?"));
const userJour = parseInt(window.prompt("Hey ! Quel est votre jour de naissance ?"));

let age = annee-userAge;
if (userMois > mois || (userMois === mois && userJour > jour)) {
        age-- ; 
    
}

const greetingMsg = "Salut " + userFirstName +" "+ userLastName + ", cette année tu as "+ age +" ans !";
console.log(greetingMsg);
