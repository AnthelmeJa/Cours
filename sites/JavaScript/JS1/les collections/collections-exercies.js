// Données utilisées par les exercices
let stockVoitures = [{
  modele: 'Opel Astra',
  couleur: 'noir',
  stock: 2,
  prixUnitaire: 26000
}, {
  modele: 'Jaguar',
  couleur: 'noir',
  stock: 120,
  prixUnitaire: 1200000
}, {
  modele: 'Peugeot 205',
  couleur: 'bleu',
  stock: 4500,
  prixUnitaire: 2500
}, {
  modele: 'Ferrari',
  couleur: 'rouge',
  stock: 56,
  prixUnitaire: 250000
}];

console.log(stockVoitures);

/*
  Exercice 1 : Afficher les couleurs des voitures
    noir
    noir
    bleu
    rouge
*/
console.log(stockVoitures[0].couleur);
console.log(stockVoitures[1].couleur);
console.log(stockVoitures[2].couleur);
console.log(stockVoitures[3].couleur);

/*
  Exercice 2 : Afficher les modèles de voitures
    Opel Astra
    Jaguar
    Peugeot 205
    Ferrari
*/
console.log(stockVoitures[0].modele);
console.log(stockVoitures[1].modele);
console.log(stockVoitures[2].modele);
console.log(stockVoitures[3].modele);

/*
  Exercice 3 : Afficher modèle, couleur et prix de chaque voiture
    Opel Astra, noir, 26000
    Jaguar, noir, 1200000
    Peugeot 205, bleu, 2500
    Ferrari, rouge, 250000
*/
console.log(stockVoitures[0].modele+", "+stockVoitures[0].couleur+", "+stockVoitures[0].prixUnitaire);
console.log(stockVoitures[1].modele+", "+stockVoitures[1].couleur+", "+stockVoitures[1].prixUnitaire);
console.log(stockVoitures[2].modele+", "+stockVoitures[2].couleur+", "+stockVoitures[2].prixUnitaire);
console.log(stockVoitures[3].modele+", "+stockVoitures[3].couleur+", "+stockVoitures[3].prixUnitaire);

/*
  Exercice 4 : Calculer et afficher la valeur du stock de chaque modèle
    Opel Astra, 52000
    Jaguar, 144000000
    Peugeot 205, 11250000
    Ferrari, 14000000
*/
for(let i=0;i<stockVoitures.length;i++){
  let somme = stockVoitures[i].stock * stockVoitures[i].prixUnitaire;
  console.log(stockVoitures[i].modele+", "+somme);
}

/*
  Exercice 5 : Calculer et afficher la valeur totale du stock, tout modèle confondu
    Valeur stock : 169302000
*/
let somme0 = stockVoitures[0].stock * stockVoitures[0].prixUnitaire;
let somme1 = stockVoitures[1].stock * stockVoitures[1].prixUnitaire;
let somme2 = stockVoitures[2].stock * stockVoitures[2].prixUnitaire;
let somme3 = stockVoitures[3].stock * stockVoitures[3].prixUnitaire;
let result = somme0+somme1+somme2+somme3;
console.log("Valeur du stock : "+result)


/*
  Exercice 6 : Ajouter la voiture suivante à la collection
*/
let nouvelleVoiture = {
  modele: 'Mercedes Benz',
  couleur: 'gris',
  stock: 42,
  prixUnitaire: 56230
};

stockVoitures.push(nouvelleVoiture);
console.log(stockVoitures)
/*
  Exercice 7 : Modifier la couleur de la Peugeot 205, mettre vert à la place de bleu
*/
console.log(stockVoitures[2].couleur);
stockVoitures[2].couleur = "vert";
console.log(stockVoitures[2].couleur);
/*
  Exercice 8 : Ajouter la propriété suivante à chaque voiture de la collection
  - estUneVoiture: true
*/
stockVoitures.forEach(voiture =>{
    voiture.estUneVoiture = true;
});
console.log(stockVoitures)

/*
  Exercice 9 : Modifier le stock de Peugeot 205 pour le mettre à 1500
*/
stockVoitures.forEach(voiture =>{
    if (voiture.modele === "Peugeot 205"){
    voiture.stock = "1500"
    }
});
console.log(stockVoitures[2].stock);

/*
  Exercice 10 : Rechercher les voitures de couleur noir
*/
let VoitureNoir =[];
stockVoitures.forEach(voiture =>{
    if (voiture.couleur === "noir"){
    VoitureNoir.push(voiture)
    }
});
console.log(VoitureNoir);

/*
  Exercice 11 : Supprimer la Peugeot 205 (sachant que sa position dans le tableau peut changer)
*/
stockVoitures.forEach((voiture, i) => {
  if (voiture.modele === "Peugeot 205") {
    stockVoitures.splice(i, 1);  // Supprime l'élément à l'index actuel
  }
});

console.log(stockVoitures);