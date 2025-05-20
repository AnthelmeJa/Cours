let monObjet = {
    toto : "Bonjour",
    isOld: false,
    age: 40,
    enfants: ['', ''],
    other: {
         
    }
};


let nom1 = "Toto";
let prenom1 = "Alo";
let age1 = 45;
let idOld1 = false;

let nom2 = "Titi";
let prenom2 = "Jerome";
let age2 = 12;
let isOld2 = false;


let personne1 =  {
    nom: "Toto",
    prenom: "Alo",
    age: 45,
    isOld: false
};

let personne2 =  {
    nom: "Titi",
    prenom: "Jerome",
    age: 12,
    isOld: false
};

console.log(personne1);

// Lire la propriété d'un objet
console.log(personne1['nom']); // Affiche Toto
console.log(personne1.nom); // Affiche Toto

// Modifier la propriété d'un objet
personne1.nom = 'Tutu';
console.log(personne1.nom); // Affiche Tutu

// Parcourir un objet
/*
for(const key in personne1) {
    const value = personne1[key];
    
    console.log(`Key : ${key}, Value : ${value}`);
}
*/

// Tableau contenant la liste des propriétés
const keys = Object.keys(personne1);
console.log(keys);

for(let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = personne1[key];
    
    console.log(`Key : ${key}, Value : ${value}`);
}
