let premierNombre = parseFloat(prompt("Taper un 1er nombre"));

let operateur= prompt("Choisir un opérateur");

let secondNombre = parseFloat(prompt("Taper un second nombre"));

let resultat = 0;


if(operateur === "+") {
    resultat = premierNombre+secondNombre;
}else if (operateur === "-"){
    resultat = premierNombre-secondNombre;
}else if (operateur === "*"){
    resultat = premierNombre*secondNombre;
}else if (operateur === "/"){
    resultat = premierNombre/secondNombre;
}
console.log(resultat) 
   