/*
import Livre from './Livre.js';

let livre1 = new Livre('nothomb', 9782253150718, 'Stupeur et Tremblements', 'Lorem ipsum');
console.log(livre1);

livre1.markIsRead();

console.log(livre1);
*/

import Livre from './LivreWithAccesseurs.js';

let livre1 = new Livre('nothomb', 9782253150718, 'Stupeur et Tremblements', 'Lorem ipsum');

let auteurLivre1 = livre1.auteur;
console.log(auteurLivre1);

livre1.auteur = 'amélie';
