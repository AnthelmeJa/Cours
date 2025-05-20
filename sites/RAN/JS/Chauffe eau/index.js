 ouvrirEau(){
    console.log("Ouvrir vanne eau ")
}
function fermerEau(){
    console.log("Fermer vanne eau")
}


function allumerChauffage(){
    console.log("Allumer chauffage")
}
function eteindreChauffage(){
    console.log("Eteindre chauffage")
}



ouvrirEau();

let niveau = 0;
while (niveau < 60){
    niveau = prompt("Capteur eau");
}
fermerEau();



allumerChauffage();

let temperature = 0;
while (temperature < 60){
    temperature = prompt("thermomètre");
}

eteindreChauffage();


