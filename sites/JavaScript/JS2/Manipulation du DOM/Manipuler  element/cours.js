
let element = document.querySelector("p");
console.log(element);

console.log(element.style)


// On peut modifier directement le style dans le JS, mais on évite de le faire
// Utiliser des classes css plutot
/*element.style.backgroundColor="red";
element.style.color="blue";*/

// Ajoute la classe de la liste
element.classList.add("toto");

//Supprime la classe de la liste
let element2 = document.querySelector(".pioupiou");
element2.classList.remove("pioupiou");


// Alterne entre ajouter / supprimer la classe de la liste
let li = document.querySelector('li');
li.classList.toggle('active');

document.querySelectorAll('li').forEach((li) => {
    li.classList.toggle('active');
});
