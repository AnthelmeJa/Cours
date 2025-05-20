document.addEventListener('DOMContentLoaded', function () {
    // Exercice 1 : Sélectionner et afficher le footer en utilisant sa classe

let footer = document.querySelector(".footer");

    // Exercice 2 : Sélectionner et afficher le paragraphe à l'intérieur du footer

let footerText= document.querySelector(".footer p");

    // Exercice 3 : Sélectionner et afficher tous les paragraphes de la page

let allText= document.querySelectorAll("p");

    // Exercice 4 : Sélectionner et afficher les paragraphes du premier article

let articleText= document.querySelectorAll("article:first-child p");

    // Exercice 5 : Sélectionner le dernier paragraphe du 1er article
    
//let lastTextArticle= document.querySelector("article ou article:first-child p:last-child");  ||*/ 
let lastTextArticle = document.querySelectorAll("article:nth-child(1) p:nth-child(2)");
console.log(lastTextArticle);

});