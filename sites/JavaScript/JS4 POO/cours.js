import Moule from './Moule.js';
import Charlotte from './Charlotte.js';
import Tourte from './Tourte.js';

let gateau = new Moule('Ovale', 5, 2);
let gateau2 = new Moule('Carré', 3, 1);

console.log(gateau);
console.log(gateau2);

let message = gateau.faireGonfler();
console.log(message);

let charlotte = new Charlotte(24, 'cerises');
console.log(charlotte);

let gonflerMsg = charlotte.faireGonfler();
console.log(gonflerMsg);

let charlotteMsg = charlotte.faireCharlotte();
console.log(charlotteMsg);

let tourte = new Tourte('cerises');
console.log(tourte);

let tourteMsg = tourte.faireTourte();
console.log(tourteMsg);
