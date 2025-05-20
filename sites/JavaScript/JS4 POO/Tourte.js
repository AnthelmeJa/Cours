import Moule from './Moule.js';

class Tourte extends Moule {
    constructor(fruits) {
        super('Rond', 3, 40);
        this.fruits = fruits;
    }
    
    faireTourte() {
        return `Une tourte aux ${this.fruits} de largeur ${this.largeur}`;
    }
}

export default Tourte;
