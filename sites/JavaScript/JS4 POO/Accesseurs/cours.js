import Moule from './Moule.js';

let gateau = new Moule('Ovale', 5, 2);

console.log(gateau.forme);

gateau.forme = 'Rectangle';

console.log(gateau.forme);
