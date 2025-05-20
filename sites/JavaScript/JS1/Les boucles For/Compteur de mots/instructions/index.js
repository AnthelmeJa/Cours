/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif de cet exercice est de compter les mots commençant
par la lettre "s".

Exemple d'algorithme (pour t'aider) :
- Parcourir la liste de mots
  - Vérifier si la première lettre est égale à s
    - Si oui, incrémente le compteur

- Affiche le nombre de mots commençant par s
NOTE : En javascript, une chaine de caractères est considérée comme un tableau de caractères
Par exemple : "TODO" == ["T", "O", "T", "O"]

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let liste_mots = ['sapin', 'bougie', 'sucre', 'soleil', 'alphabet', 'trousse'];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code sera implémenté ici...

let compteur = 0;

for (let i = 0; i < liste_mots.length; i++) {
  if (liste_mots[i][0] === 's') {
    compteur++;
  }
}
console.log(`${compteur} mots commençant par s`);
/**************************************************************/
/*                      (Seconde méthode)                     */
/**************************************************************/

/*
let liste_mots = ['sapin', 'bougie', 'sucre', 'soleil', 'alphabet', 'trousse'];
let compteur = 0;

liste_mots.forEach((mot) => {
  if(mot[0] === 's') {
    compteur++;
  }
});

console.log(`${compteur} mots commençant par s`);
*/
