
console.log('Début');
/*
// Récupération de données depuis l'api https://catfact.ninja/fact
fetch('https://catfact.ninja/fact').then((response) => {
    console.log(response);
    
    // On lit les données et on les converti en JSON
    response.json().then((data) => {
        console.log(data);
    });
});

*/

// Avec gestion des erreurs

fetch('https://catfact.ninja/fact').then((response) => {
    if (response.ok) {
        response.json().then((data) => {
            console.log(data);
        });
    } else {
        console.log('La requête a échoué');
        console.log(response);
    }
});

console.log('Fin');
