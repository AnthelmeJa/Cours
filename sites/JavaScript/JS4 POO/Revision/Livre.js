class Livre {
    auteur;
    isbn;
    titre;
    resume;
    
    constructor(a, i, t, r) {
        this.auteur = a;
        this.isbn = i;
        this.titre = t;
        this.resume = r;
    }
    
    markIsRead() {
        this.isRead = true;
    }

    lireLivre() {
        return `Lecture du livre : ${this.resume}`;
    }
}

export default Livre;
