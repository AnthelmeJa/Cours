/* TODO : Récupérer depuis l'API le fait et l'afficher dans le paragraphe "fact"

   BONUS : une fois l'affichage effectué,
   ajouter un bouton pour récupérer et afficher un nouveau fait
*/

const apiUrl = "https://catfact.ninja/fact";
let fact = document.querySelector(".fact")
let test = document.querySelector(".test")

function toto(){
    fetch('https://catfact.ninja/fact').then((response) => {
       if (response.ok) {
           response.json().then((data) => {
               console.log(data);
               fact.textContent= data.fact ;
           });
       } else {
           console.log('La requête a échoué');
           console.log(response);
       }
   });  
}
toto();

console.log('Fin');

test.addEventListener("click",()=>{
   toto();
})