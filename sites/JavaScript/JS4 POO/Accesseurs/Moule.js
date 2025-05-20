class Moule {
    #forme;
    #hauteur;
    #largeur;
    
    constructor(f, h, l) {
        this.#forme = f;
        this.#hauteur = h;
        this.#largeur = l;
    }
    
    get forme() {
        console.log('get forme');
        return this.#forme;
    }
    
    set forme(f) {
        console.log('set forme');
        this.#forme = f;
    }
}

export default Moule;
