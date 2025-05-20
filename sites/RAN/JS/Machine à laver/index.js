//Mouvement tambour
function cycleTambour(nombreDeTours){
    for (let i=0; i < nombreDeTours; i++){
        console.log("tourner tambour");
        console.log("stopper tambour");
    }
}

//niveau d'eau
let niveau = 0;

function remplissage(){
    console.log("remplissage de l'eau")
    while (niveau < 50 ){
      niveau+=1;
      console.log(niveau);
    }
}

function vidange(){
    while (niveau > 0 ){
        console.log("ouverture vidange de l'eau")
        niveau-=1;
        console.log(niveau);
    }
    console.log("fermeture vidange de l'eau")
}

//Essorage (temps = seconde)
let temps = 0;

function essorage(){
    while (temps < 1800){
        vidange()
        temps+=60;
        cycleTambour(10);
    }
}

//Adoucissant
function adoucissant(){
    remplissage();
    console.log("mettre adoucissant");
    cycleTambour(10);
    vidange();
}

function rinçage(nombreDeRinçage){
    for (let i=0; i < nombreDeRinçage; i++){
        remplissage();
        cycleTambour(10);
        vidange();
    }
}

//Lavage
function lavage(){
    remplissage();
    console.log("mettre la lessive");
    cycleTambour(20);
    vidange()
}

//Cycle
function Cycle(){
    lavage();
    rinçage(4);
    adoucissant();
    rinçage(2);
    essorage();
}

