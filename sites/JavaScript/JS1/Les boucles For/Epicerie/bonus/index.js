/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/* 
Epicerie - BONUS 1

On propose au client d'acheter un article tant qu'il y en a de disponibles

// TODO
Tant qu'il reste des articles différent de '',
exécuter le programme de la partie 1

Epicerie - BONUS 2

Proposer au client d'ajouter des articles dans la liste

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

const articles = [
  'Chips',
  'Saucisson',
  'Glace',
  'Fraises',
  'Vin',
  'Sucre',
  'Bière',
  'Mouchoirs'
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code sera implémenté ici...
function resteDesArticles() {
  return articles.some(article => article !== '');
}

while (resteDesArticles()) {
  console.log("Articles disponibles :");
  console.log(articles);

  let choix = window.prompt("Quel article voulez-vous acheter ?");
  let articleTrouve = false;

  for (let i = 0; i < articles.length; i++) {
    if (choix === articles[i]) {
      console.log("ok, vous avez obtenu l'article");
      articles[i] = "";
      articleTrouve = true;
      break;
    }
  }

  if (!articleTrouve) {
    console.log("Article indisponible...");

    let ajout = window.prompt("Souhaitez-vous l'ajouter à la liste ? (oui/non)");
    if (ajout.toLowerCase() === "oui") {
      articles.push(choix);
      console.log(`${choix} a été ajouté à la liste.`);
    }
  }
}

console.log("Il n'y a plus d'article disponible. À bientôt !");