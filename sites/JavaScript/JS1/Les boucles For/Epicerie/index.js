/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/* 
Epicerie

Je suis un épicier, je possède une liste d'articles à vendre.
Un client vient consulter ma liste d'articles.
Il peut ou non en acheter un.
Lorsqu'il décide d'en acheter un, celui-ci disparait de ma liste.

// TODO
- Un tableau contient la liste d'articles à vendre (dans la constante articles).
- Afficher la liste d'articles au client.
- Demander au client quel article il veut acheter
- Le client choisi un article à acheter :
  - si l'article est dans la liste : afficher 'ok' et le supprimer de la liste d'articles
  - sinon afficher 'Article indisponible...'

NOTE : Pour des raisons de simplicité,
on simulera la suppression d'un article de la liste
en le remplaçant par une chaine vide '' dans le tableau.

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
console.log(articles);
let choix = window.prompt("Quel article voulez-vous acheter ?");
let articleTrouve = false;

for (let i = 0; i < articles.length; i++) {
  if (choix === articles[i]) {
    console.log("ok, vous avez obtenu l'article");
    articles[i] = ""; 
    articleTrouve = true;
  }
}


if (!articleTrouve) {
  console.log("Article indisponible...");
}
