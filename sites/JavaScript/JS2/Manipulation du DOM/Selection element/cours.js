// Sélectionner un seul élement (ou le premier qu'il trouve)

// Sélectionne le 1er <p> sur la page
let element = document.querySelector('p');
console.log(element);

// Sélectionne le 2ème paragraphe
element = document.querySelector('p:nth-child(3)');
console.log(element);

// Sélectionne la <li> précédée d'un élement ayant la classe test
element = document.querySelector('.test + li');
console.log(element);

element = document.querySelector('ul');
let firstLi = element.querySelector('li:first-child');
console.log(firstLi);

//Sélectionner une liste d'éléments

let paragraphes = document.querySelectorAll('p');
console.log(paragraphes);

let paragraphesExceptPioupiou = document.querySelectorAll("p:not(.pioupiou)");
console.log(paragraphesExceptPioupiou);

let a= document.querySelector(".ggg");
console.log(a.style);// Attention appeler une prop sur un élément null crash le code

// Pour éviter cela, utiliser une condition
if (a !==null){
    console.Log(a.style);
}

// Sélectionner un élément par son identifiant
element = document.getElementById("app");
//ou element = document.querySelector("#app");
console.log(element);


