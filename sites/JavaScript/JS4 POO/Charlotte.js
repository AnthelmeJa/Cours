import Moule from './Moule.js';

class Charlotte extends Moule {
    nbreBiscuits;
    fruits;
    
    constructor(nbreBiscuits, fruits) {
        super('Rond', 20, 30);
        this.nbreBiscuits = nbreBiscuits;
        this.fruits = fruits;
    }
    
    faireCharlotte() {
        return `La charlotte avec ${this.nbreBiscuits} et ${this.fruits} est prête`;
    }
}

export default Charlotte;
