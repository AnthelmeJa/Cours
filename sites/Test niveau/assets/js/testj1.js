const maPhrase = document.querySelector("h2")
const monBouton = document.getElementById("bouton")
/*addeventlistener qui écoute l'évenement click et qui change la phrase du h2
ce n'est pas vraiment dynamique en soi car il faudrait faire un écouteur d'évent
pour savoir si l'utilisateur est bien connecter (ce qui demande une BDD et une API)
*/

monBouton.addEventListener("click",() =>{
    maPhrase.innerHTML="Bienvenue"
})