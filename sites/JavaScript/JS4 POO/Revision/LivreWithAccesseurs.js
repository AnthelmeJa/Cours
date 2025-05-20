class Livre {
    #auteur;
    #isbn;
    #titre;
    #resume;
    
    constructor(a, i, t, r) {
        this.#auteur = a;
        this.#isbn = i;
        this.#titre = t;
        this.#resume = r;
    }
    
    get auteur() {
        console.log('call getter');
        return this.#auteur;
    }
    
    set auteur(a) {
        console.log('call setter');
        this.#auteur = a;
    }
    
    // ISBN en lecture seule, pas de setter donc
    get isbn() {
        return this.#isbn;
    }
}

export default Livre;
