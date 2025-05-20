
# Exercice 1 : Attendre

Ecrire le contenu de la fonction :
- Elle retourne une promesse
- La promesse est résolue vide au bout d'un certain temps défini par le paramètre ms

```javascript
function attendre(ms) {
  // TODO
}

console.log("Début");
attendre(2000).then(() => {
  console.log("Fin 2 secondes plus tard");
});
```

# Exercice 2 : Processus

Ecrire le contenu des 3 fonctions, chacune :
- Retourne une promesse
- La promesse est résolue avec le message au bout d'un certain temps
spécifiés dans les commentaires TODO ci-dessous

```javascript
function step1() {
  // TODO retourner la chaine "step 1 complete" au bout de 1s
}
function step2() {
  // TODO retourner la chaine "step 2 complete" au bout de 1.5s
}
function step3() {
  // TODO retourner la chaine "step 3 complete" au bout de 0.5s
}

step1()
  .then(step2)
  .then(step3)
  .then(() => console.log("Processus completed"));
```

# Exercice 3 : Cat fact with promise

La fonction callCatFactApi retourne une promesse.
Appeler la fonction callCatFactApi et afficher dans la console le résultat

```javascript
function callCatFactApi() {
  const apiUrl = "https://catfact.ninja/fact";

  return fetch(apiUrl)
    .then((response) => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error(response);
      }
    });
}

// TODO

```

# Exercice 4 : Cat fact multiple with promise

1. Appeler 5 fois la fonction callCatFactApi en remplissant le tableau "promises" avec chaque promesse retournée par la fonction callCatFactApi
2. Puis parcourir ce même tableau et afficher dans la console le contenu de la propriété "fact".

ASTUCE : Utiliser Promise.all(promises) qui retourne une promesse résolue avec un tableau.
Ce tableau contient la donnée transmise de chaque promesse.

```javascript
function callCatFactApi() {
  const apiUrl = "https://catfact.ninja/fact";

  return fetch(apiUrl)
    .then((response) => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error(response);
      }
    });
}

let promises = [];

// TODO

```
