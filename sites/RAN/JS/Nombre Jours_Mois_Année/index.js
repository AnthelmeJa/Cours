//mois de 30 jours
function estUnMoisDeTrenteJours (mois){
    if (mois ===4 || mois ===6||mois ===9||mois ===11){
        return 1;
    }else{
        return 2;
    }
};

//mois de 31 jours
function estUnMoisDeTrenteEtUnJours(mois){
    if (mois ===1||mois ===3||mois ===5||mois ===7 || mois ===8||mois ===10||mois ===12){
        return 1;
    }else{
        return 2;
    }
};

//année Bissextile
function estAnneeBissextile(annee){
    if (annee % 400===0){
        return 1;
    }else{
        return 2;
    }
};

//Nombre de jours pas mois et année
function nombreDejours(mois,annee){
    let estTrente = estUnMoisDeTrenteJours(mois);
    let estTrenteEtUn = estUnMoisDeTrenteEtUnJours(mois);
    
    if (estTrenteEtUn ===1){
        return 31
    }else if (estTrente ===1){
        return 30
    }else if ( estAnneeBissextile(annee) === 1){
        return 29
    }else{
        return 28
    }
};

//programme
function programmePrincipal(){
    let mois = Number(prompt("Saisir un numéro de mois"));
    let annee = Number(prompt("Saisir une année entre 1588 et 2023"));
    while(mois < 1 || mois > 12){
       mois = Number(prompt("Saisir un numéro de mois"));
    }
    while(annee <1588 || mois > 2023){
        annee = Number(prompt("Saisir une année entre 1588 et 2023"));
    }
    let nombreJours = nombreDejours(mois,annee);
    console.log(`Le nombre de jours est de ${nombreJours}`)
}
programmePrincipal();

