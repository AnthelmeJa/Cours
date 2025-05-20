// Des fonctions connnues
/*
console.log('Hello World');

let tableau = [];
tableau.push('');

window.prompt('Saisie un texte');
*/

// Fonction simple
function toto() {
    let a = 1;
    let b = 2;
    let c = a + b;
    
    console.log(c);
}

toto();

toto();

for (let i = 0 ; i < 5; i++) {
    toto();
}

// Fonction retournant quelque chose
function titi() {
    let a = 5;
    let b = 10;
    
    let c = a + b;
    
    // Retourne le contenu de c
    return c;
}

titi();// Ne se passe rien si je traite pas la donnée retournée

// Stocke la donnée retournée par la fonction dans la variable d
let d = titi();

console.log(d);

// Retourner plusieurs choses
function tata() {
    let a = 5;
    let b = 10;
    
    let c = a + b;
    
    // Methode 1 : utiliser un objet
    return {
        a: a,
        b: b,
        c: c
    };
    
    // Méthode 2 : utiliser un tableau
    //return [a, b, c];
}
