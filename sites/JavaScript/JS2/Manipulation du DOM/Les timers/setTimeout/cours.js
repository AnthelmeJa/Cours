
function afficheToto() {
    console.log('toto');
}

// Passe la signature de la fonction, et c'est setTimeout qui va l'appeler
// setTimeout(afficheToto, 5000);

// Appelle la fonction et passe ce qu'elle retourne à setTimeout
// Ce n'est pas ce qu'on veut faire ici
// setTimeout(afficheToto()); 

// Pour stopper / annuler le timer
let timerId = setTimeout(afficheToto, 2000);

clearTimeout(timerId);


// Appel reccursif de setTimeout

function afficheBonjour() {
    console.log('Bonjour');
    
    setTimeout(afficheBonjour, 2000);
}

afficheBonjour();


