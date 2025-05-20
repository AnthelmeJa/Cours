let pvJoueur = Number(prompt("Taper vos pv"));
let paJoueur = Number(prompt("Taper vos pa"));

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pvEnnemi= entierAleatoire(1, 20);


let paEnnemi= entierAleatoire(1, 20);


while (pvEnnemi > 0 && pvJoueur > 0){
    pvEnnemi -= paJoueur;
    if (pvEnnemi > 0){
        pvJoueur-= paEnnemi
    } 
}
if (pvEnnemi < 0 ){
    console.log("Le joueur à gagné")
}else{
    console.log("Le méchant à gagné")
}
