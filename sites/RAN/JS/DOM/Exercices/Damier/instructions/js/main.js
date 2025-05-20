/**************************************************************/
/*                        Consignes                           */
/**************************************************************/
/*

L'objectif de cet exercice est de pratiquer les événements JS
sur les éléments HTML, ainsi que les fonctions.

Il s'agit de plusieurs petits exercices indépendants.
Pour chacun d'eux, il est attendu d'implémenter le code selon
une méthode permettant d'avoir un code lisible et compréhensible.

1. Dans la partie "Main Program",
on y trouve uniquement les points d'entrée de chaque exercice.
Un point d'entrée est le point de départ de toute procédure de traitement.
Dans ces exercices, il d'agira des événements sur des éléments HTML.

Exemple :
document.querySelector('.js-damier').addEventListener('click', onDamierClick);

2. Dans la partie "Event listeners", on trouvera les fonctions qui seront
appelées lorsque l'utilisateur effectuera des actions sur les éléments HTML.
Ces fonctions contiendront l'algorithme de traitement de l'événement.

Exemple :
function onDamierClick() {
  clearCheckboard();
  createDamier();
}

3. Dans la partie "Fonctions", on trouvera les fonctions qui seront utilisées
pour le traitement des événements. Elles seront appelées par
les "Event listeners".

Exemple :
function clearCheckboard() {
  ...
}
function createDamier() {
  ...
}

*/
/**************************************************************/
/*                         Données                            */
/**************************************************************/

// Les variables globales sont déclarées ici.
// Uniquement si nécéssaire.

/**************************************************************/
/*                        Fonctions                           */
/**************************************************************/

// Les fonctions (appelées par les Event Listener) sont déclarées ici.

/**************************************************************/
/*                      Event listeners                       */
/**************************************************************/

// Les Event Listener sont déclarés ici.

/**************************************************************/
/*                       Main Program                         */
/**************************************************************/

// IMPORTANT Rappel : Pas de traitement ici,
// uniquement les déclarations des Event Listener.
// IMPORTANT Rappel : Pas de traitement ici,
// uniquement les déclarations des Event Listener.

document.addEventListener('DOMContentLoaded', () => {

  

  // 1. Lorsque l'utilisateur clique sur le bouton "js-damier",
  // Afficher un damier dans la grille

  // TIP : Ajouter la classe .black sur les cases concernées
  let damierButton = document.querySelector('.js-damier');
  damierButton.addEventListener('click', function () {
    cleanboard();
    for (let rowIndex = 1; rowIndex <= 8; rowIndex++) {
      for (let colIndex = 1; colIndex <= 8; colIndex++) {
        const cellDOM = document.querySelector('.js-row' + rowIndex + '.js-col'+colIndex);
        
        if ((rowIndex + colIndex) % 2 === 0) {
          cellDOM.classList.add('black');
        }
      }
    }
  });

  
  // 2. Lorsque l'utilisateur clique sur le bouton "js-disco",
  // Afficher un dancefloor de lumières dans la grille

  let discoButton = document.querySelector(".js-disco");

  let randomClasseListe = ["disco-color1","disco-color2"
    ,"disco-color3","disco-color4",
    "disco-color5"];

  let damier=document.querySelectorAll(".js-cell")
  discoButton.addEventListener('click', function () {
    cleanboard()
    for (let i=0;i<damier.length;i++){
      let randomClasse = Math.floor(Math.random() * randomClasseListe.length);
      damier[i].classList.add(randomClasseListe[randomClasse])
    }
      
  });

    
  function cleanboard(){
    for (let i=0;i<damier.length;i++){
      damier[i].classList.remove("black");
      for (let j=0;j<randomClasseListe.length;j++){
        damier[i].classList.remove(randomClasseListe[j]);
      }
    }
  };

  // TIP : Ajouter les classes .color1, ... .color5 aléatoirement


  // 3. Lorsque l'utilisateur clique sur le bouton "js-labyrinth",
  // Afficher le motif présent sur le bouton dans la grille
  let labyrinthButton = document.querySelector(".js-labyrinth");
  let labyrinthPattern = [1,3,4,5,6,7,8,9,12,14,16,17,22,24,25,26,27,28,30,32,33,38,40,41,43,44,45,46,48,49,56,57,58,59,60,61,62,63,64];
  labyrinthButton.addEventListener('click', function () {
    cleanboard();
  /*for (let rowIndex = 1; rowIndex <= 8; rowIndex++) {
        for (let colIndex = 1; colIndex <= 8; colIndex++) {
          const cellDOM = document.querySelector('.js-row' + rowIndex + '.js-col'+colIndex);
          
          if (colIndex=== 1) {
            cellDOM.classList.add('black');
          }else if (colIndex=== 8) {
            cellDOM.classList.add('black');
          }else if(rowIndex=== 8) {
            cellDOM.classList.add('black');
          }else if(rowIndex=== 1 && colIndex===3){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 1 && colIndex===4){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 1 && colIndex===5){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 1 && colIndex===6){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 1 && colIndex===7){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 2 && colIndex===4){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 2 && colIndex===6){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 3 && colIndex===6){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 4 && colIndex===6){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 5 && colIndex===6){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 6 && colIndex===6){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 6 && colIndex===5){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 6 && colIndex===4){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 6 && colIndex===3){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 4 && colIndex===2){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 4 && colIndex===3){
            cellDOM.classList.add('black');
          }else if(rowIndex=== 4 && colIndex===4){
            cellDOM.classList.add('black');
          }
          
        }
      }*/

    for (let i=0 ; i < damier.length; i++){
      for (let j=0; j < labyrinthPattern.length; j++){
        if(i===labyrinthPattern[j]-1){
          damier[i].classList.add("black");
        }
      }
    }
   
    });














  // TIP : Ajouter la classe .black sur les cases concernées


  // 4. Lorsque l'utilisateur enfonce le bouton de la souris sur une case (classe "js-cell"),
  // Afficher "push" sur fond jaune (utiliser la classe "push")
  // Puis, lorsqu'il relâche le bouton, 
  // afficher "pull" sur fond orange (utiliser la classe "pull")
  // Enfin, s'il double clique sur la case,
  // afficher "boom" sur fond rouge (utiliser la classe "boom")
  for (let i=0; i < damier.length; i++){
    damier[i].addEventListener('mousedown', function () {
      damier[i].classList.toggle("push");
    
    });
  }

  for (let i=0; i < damier.length; i++){
    damier[i].addEventListener('mouseup', function () {
      damier[i].classList.remove("push");
      damier[i].classList.toggle("pull");
    
    });
  }

  for (let i=0; i < damier.length; i++){
    damier[i].addEventListener('dblclick', function () {
      damier[i].classList.remove("pull");
      damier[i].classList.toggle("boom");
    
    });
  }

  // 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
  // Afficher bobby et le déplacer sur le grille (de case en case)

  // TIP : Ajouter la classe visible sur la div ayant l'id "bobby"
  // Le déplacer de case en case
  // dans la direction de la flèche appuyée
  let bobby = document.querySelector("#bobby");
  

  /*for (let rowIndex = 1; rowIndex <= 8; rowIndex++) {
    for (let colIndex = 1; colIndex <= 8; colIndex++) {
      const cellDOM = document.querySelector('.js-row' + rowIndex + '.js-col'+colIndex);
      let up = rowIndex+1;

      document.addEventListener('keydown',function (event){
        let code =event.code;
        if(code === 'ArrowUp') {
          bobby.classList.add("visible");
          bobby.appendChild(rowIndex-1);
      }
      });
      document.addEventListener('keydown',function (event){
        let code =event.code;
        if(code === 'ArrowDown') {
          bobby.classList.add("visible");
          bobby.style.top = "48px"
          
      }
      });
      document.addEventListener('keydown',function (event){
        let code =event.code;
        if(code === 'ArrowRight') {
          bobby.classList.add("visible");
      }
      });
      document.addEventListener('keydown',function (event){
        let code =event.code;
        if(code === 'ArrowLeft') {
          bobby.classList.add("visible");
      }
      });
      


    }
  }*/////////////////////
    
    /*for (let i =0; i<8; i++){
      document.addEventListener('keydown',function (event){
        let code =event.code;
        if(code === 'ArrowDown') {
          bobby.classList.add("visible");
          bobby.style.top = "48px"
        }
      });
    }*//////////////////
    let pouet = 0; //code julie
    let prout=0;
    
    document.addEventListener('keydown', function (event) {
     //code julie
      //appuie sur une touche et lis ta console bisous
      let code = event.code;
        if(code === 'ArrowDown' && pouet <21) {
          pouet+=3;
          bobby.classList.add("visible");
          bobby.style.top = pouet+"rem";         
        } else if(code === 'ArrowUp' && pouet >0) {
          pouet-=3;
          bobby.classList.add("visible");
          bobby.style.top = pouet+"rem";         
        } else if(code === 'ArrowRight' && prout< 21) {
          prout+=3;
          bobby.classList.add("visible");
          bobby.style.left = prout+"rem";         
        }else if(code === 'ArrowLeft' && prout > 0) {
          prout-=3;
          bobby.classList.add("visible");
          bobby.style.left = prout+"rem";         
        }
    });
    
  
  //////////////////////


    /*for (let i=0; i < damier.length; i++){
      let down = damier[i] +8;
      console.log(damier[+8])
      document.addEventListener('keydown', function (event) {
        let code =event.code;
        if(code === 'ArrowDown') {
          bobby.classList.add("visible");
          damier[+8].appenchild(bobby)
      }
      
      });
    }*/
  






  // 6. Chaque seconde, un chat se déplace aléatoirement sur les cases du plateau

   /* let chat = document.querySelector("#cat");
    
    for(let i=0; i<damier.length;i++){
      let choixDirection= ["3rem","-3rem"]
      let choixDirectionNom=["chat.style.top=","chat.style.left="]
      let randomPosition = Math.floor(Math.random() * choixDirection);
      let randomPositionNom =Math.floor(Math.random() * choixDirectionNom);
      //let positionCell= damier[randomPosition].getBoundingClientRect();
      //let positionCellTop= positionCell.top;
      //let positionCellLeft= positionCell.left;

      
      randomPositionNom(choixDirection) + randomPosition(choixDirectionNom);
      

      
    }

  setTimeout(Schrödinger, 1000);

  function Schrödinger (){

  }*////////////////////




  
  /*let chatx = 0; //code julie
  let chaty=0;
  
  function randomChat(min, max) {
    return min + Math.floor(Math.random() * (max - min));
  }
  let chatrandom=randomChat(1,5);
  
  
    
      if(chatrandom=1 && chatx <21) {
        chatx+=3;
        bobby.style.top = chatx+"rem";         
      } else if(chatrandom=2 && chatx >0) {
        chatx-=3;
        bobby.style.top = chatx+"rem";         
      } else if(chatrandom=3 && chaty< 21) {
        chaty+=3;
        bobby.style.left = chaty+"rem";         
      }else if(chatrandom=4 && chaty> 0) {
        chaty-=3;
        bobby.style.left = chaty+"rem";         
      }
  
   */
 
  
  



  // TIP : Ajouter un timer qui déplace la div ayant l'id "cat" d'une case
  // dans une direction aléatoire toutes les secondes

});
