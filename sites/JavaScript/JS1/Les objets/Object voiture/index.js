let voiture1 =  {
    marque: "Toto",
    année: 2015,
    achat: new Date("2015-09-09"),
    passager: ["Juliette"," Henry"]
};

let voiture2 =  {
    marque: "Titi",
    année: 1996,
    achat: new Date("2002-04-05"),
    passager: ["Marie"," Antoine"]
};

let voitures = [voiture1,voiture2]; // création d'une collection ... c'est juste un tableau d'objets.

for (let i = 0; i < voitures.length; i++) {
    document.write(`<h2>Voiture ${i}</h2>`);
    document.write(`<ul>`);
    
    for(const key in voitures[i]) {
        const value1 = voitures[i][key];
        console.log(`Key : ${key}, Value : ${value1}`);
        document.write(`<li>${key}: ${value1} </li>`);
    }
    document.write(`</ul>`);
}