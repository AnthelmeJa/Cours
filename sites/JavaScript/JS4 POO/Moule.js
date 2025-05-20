class Moule {
    forme;
    hauteur;
    largeur;
    
    constructor(f, h, l) {
        this.forme = f;
        this.hauteur = h;
        this.largeur = l;
    }
    
    faireGonfler() {
        let hauteurFinale = this.hauteur * 1.1;
        return `Gonfle jusqu'à ${hauteurFinale}`;
    }
}

export default Moule;
