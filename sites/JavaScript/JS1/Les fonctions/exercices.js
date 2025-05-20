/* Exercice 1
    - Ecrire la fonction maxValeur qui prend trois paramètres x, y et z
    - Et retourne la plus grande valeur entre les 3.
*/
function maxValeur(x,y,z){
    if (x>y && x>z){
        return x
    }else if(y>x && y>z){
        return y
    }else{
        return z
    }
};

// ou return Math.max(x,y,z);


const max = maxValeur(5, 8, 9);
console.log(max);// Doit afficher 9

/* Exercice 2
    - Ecrire la fonction avgValeur qui prend trois paramètres x, y et z
    - Et retourne la valeur moyenne des 3
*/

function avgValeur(x,y,z){
     if (x>y && x<z ||x<y && x>z){
        return x
    }else if(y>x && y<z ||y<x && y>z){
        return y
    }else{
        return z
    }
}


//ou return (x+y+z)/3

const avg = avgValeur(2, 4, 6);
console.log(avg);// Doit afficher 4

/* Exercice 3
    - Ecrire la fonction sayHello qui prend deux paramètres prenom et nom
    - Et retourne la concaténation de la chaine 'Hello ' suivie du prenom, un espace et enfin le nom
*/
function sayHello(prenom,nom){
    return "Hello "+prenom+" "+nom
}
const message = sayHello('Fabrice', 'Montagne');
console.log(message);// Doit afficher 'Hello Fabrice Montagne'

/*
  Exercice 4
   - Ecrire la fonction division qui prend deux paramètres : denominateur et numerateur
   - Et retourne le resultat de la division
*/
function division(denominateur,numerateur){
    return numerateur/denominateur 
};

/* Exercice 5
   - Ecrire la fonction divisionEucledienne qui prend deux paramètres : denominateur et numerateur
   - Et retourne un tableau avec deux valeurs : [resultat, reste]
   ASTUCE : reste =  numerateur % denominateur
*/

function divisionEucledienne(denominateur,numerateur){
    let reste = numerateur % denominateur;
    let resultat = Math.floor(numerateur / denominateur);
    return [resultat, reste]
};

const test = divisionEucledienne(45,852);
console.log(test)
/* Exercice 6
   Partie 1
   - Ecrire la function miaou qui prend un paramètre nombreMiaou
   - Et retourne une chaine contenant autant de miaou que demandé par le param nombreMiaou


   Partie 2
   - Utiliser la fonction miaou pour afficher 50 miaous comme suit
      miaou
      miaou miaou
      miaou miaou miaou
      miaou miaou miaou miaou
      ...
      miaou ... x 50
*/


function miaou(nombreMiaou){
    let resultat =""
     for (let i = 1; i <= nombreMiaou; i++) {
        resultat += "miaou ".repeat(i) + "\n";
    }
   return resultat
};
const meow= miaou(50);
console.log(meow)
/* Exercice 7
   Partie 1
   - Ecrire une fonction de conversion eurToNeveflouz qui prend en paramètre euros
   - Et retourne sa valeur en neveflouz, calculé comme suit : 1 NEZ = 150 EUR

   Partie 2
   - Convertir le tableau suivant (contenant des montants en euros) en neveflouz
   en utilisant la fonction précédente
   - Afficher le résultat dans la console
*/
let montantsEuros = [150, 45.23, 890.45, 12000000, 45, 1, 1.5, 5, 10, 20, 50, 100, 500, 5000, 999, 1000];


function eurToNeveflouz(euros){
        return euros / 150
};
let nezList=[]
 montantsEuros.forEach((montant) =>{
     let nezValue = eurToNeveflouz(montant);
     nezList.push(nezValue.toFixed(2));
    console.log(`${montant} EUR = ${nezValue.toFixed(2)} NEZ`);
});
console.log(nezList)

/* Exercice 8
   - Ecrire une fonction zip qui prend deux paramètres : tableau1 et tableau2
   - Et retourne la concaténation des deux tableaux

   Résultat attendu :
   si tableau1 = ['toto', 'titi', 'tata', 'tutu']
   et tableau2 = ['bobo', 'bibi', 'baba', 'bubu']
   alors résultat = [['toto', 'bobo'], ['titi', 'bibi'], ...]
*/
let tableau1 = ['toto', 'titi', 'tata', 'tutu']
let tableau2 = ['bobo', 'bibi', 'baba', 'bubu']

function zip(tableau1,tableau2){
    let resultat =[]
    for (let i=0;i<tableau1.length;i++){
         resultat.push([tableau1[i]+", "+tableau2[i]]) 
    }
    return resultat
}
console.log(zip(tableau1,tableau2))

/* Exercice 9
   - Ecrire une fonction add qui prend deux paramètres : tableau et offset
   - Et retourne un tableau où chaque valeur est ajouté de offset

   Résultat attendu :
   si tableau = [1, 10, 23, 56, 89]
   et offset = 15
   alors résultat = [16, 25, 38 ...]
*/
let resultat2=[]
function add(tableau,offset){
    tableau.forEach((element) =>{
        element = element + offset;
        resultat2.push(element) 
    })
    return resultat2
};
let tableauTest = [1, 10, 23, 56, 89]
let offsetTest =15
console.log(add(tableauTest,offsetTest))


/* Exercice 10
   - Ecrire une fonction extract qui prend deux paramètres : collection et key
   - Et retourne un tableau contenant la valeur correspondant à la propriété de chaque objet de la collection

   Résultat attendu :
   si collection = [{
      productName: "Papier", stock: 10, prix: 8
   }, {
      productName: "Stylo", stock: 10, prix: 6
   }, {
      productName: "Agrafeuse", stock: 10, prix: 12
   }]
   et key = "productName"
   alors résultat = ["Papier", "Stylo", "Agrafeuse" ...]
*/
let collection= [{
      productName: "Papier", stock: 10, prix: 8
   }, {
      productName: "Stylo", stock: 10, prix: 6
   }, {
      productName: "Agrafeuse", stock: 10, prix: 12
   }]
let key1= "productName";



function extract (collection,key){
    let resultat=[]
    for (let i = 0; i < collection.length; i++) {
        resultat.push(collection[i][key]);
    }
    return resultat;
    
};
console.log(extract(collection,key1));

/* Exercice 11
   - Ecrire une fonction clean qui prend deux paramètres : collection et keysList
   - Et retourne la collection avec seulement les propriétés demandés par keysList

   Résultat attendu :
   si collection = [{
      productName: "Papier", stock: 10, prix: 8, toto: "fdmlgjdfg"
   }, {
      productName: "Stylo", stock: 10, prix: 6, titi: "sdofgj", cheval: "blanc"
   }, {
      productName: "Agrafeuse", stock: 10, prix: 12
   }]
   et keysList = ["productName", "prix", "stock"]
   alors résultat = [{
      productName: "Papier", stock: 10, prix: 8
   }, {
      productName: "Stylo", stock: 10, prix: 6
   }, {
      productName: "Agrafeuse", stock: 10, prix: 12
   }]
*/
let collection2 = [{
      productName: "Papier", stock: 10, prix: 8, toto: "fdmlgjdfg"
   }, {
      productName: "Stylo", stock: 10, prix: 6, titi: "sdofgj", cheval: "blanc"
   }, {
      productName: "Agrafeuse", stock: 10, prix: 12
   }]
   
let keysList = ["productName", "prix", "stock"]

function clean(collection,keyList){
    let resultat=[]
    for (let i = 0; i < collection.length; i++) {
        for (let j=0;j<keyList.length;j++){
           resultat.push(collection[i][keyList[j]]); 
        }
        
    }
    return resultat;
}
console.log(clean(collection2,keysList));