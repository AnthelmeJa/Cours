//Pour vérifier le bon déroulement d'un programme, on met des sondes
console.log("Plop !")

//Exercice Hello World
//Ecrire Hello world deans la console
console.log("Hello World !");

//Une variable
let maVariable = "Bonjour";
maVariable = "salut";
console.log(maVariable);


/**
 * Exercice
 * 
 * Déclarer une variable avec le mot-clé let ayant comme nom « color ».
 * Puis, sur la ligne suivante, lui assigner la valeur « rouge ».
 */

let color= "";
color = "rouge";
console.log(color);


// Une constante --- La convention est de mettre les const EN_UPPER_CASE
const PI =3.14;
//PI = 78;// Uncaught TypeError: Assignment to constant variable.
// TIP : on privilégie les constantes dans le code
// (pour éviter les erreurs de changement de rôle d'une variable dans un script).


/**
 * Exercice
 * 
 * Déclarer une constante  « MSG » avec le mot-clé `const` en lui assignant une
 * valeur de votre choix, telle qu'un message ou un nombre.
 * Afficher la valeur de cette variable dans la console du navigateur.
 */

const MSG = "Bonjour cher Padawan";

console.log(MSG);

//Types (boolean, alias bool ou encore interrupteur)
let toto = true; //ou false

//Chaine de caractères (string ou str)
//let toto2="";
let toto2 ="Coucou";

//Nombre entier (integer ou int)
//let toto3 = 0;
let toto3 = 45;

//Nombre flottant (float)
//let toto4 = 0;
let toto4=12.6;


/**
 * Exercice
 *
 * Déclarer une variable ayant pour type String.
 * Afficher la valeur de cette variable dans la console du navigateur.
 */

let henry="bonjour, je m'appelle Henry";
console.log(henry);

henry="bonjour, je m'appelle Henry et j'ai ";

/**
 * Exercice
 *
 * Déclarer une variable ayant pour type int.
 * Afficher la valeur de cette variable dans la console du navigateur.
 */
 
 let age = 27;
 console.log(henry+age+" ans");
 
 
// Les opérateurs arithmétiques + / * -

let a =2;
let b=3;

let c = a + b;
console.log(c);

c = a * b;
console.log(c);

c = a - b;
console.log(c);

c = a / b;
console.log(c);

c =(a +b) * c;// avec c = 2 /3 = 3.333333333
console.log(c);



