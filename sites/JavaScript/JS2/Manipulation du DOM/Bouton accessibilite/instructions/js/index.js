/********************************************************************************/
/*                               Instructions                                   */
/********************************************************************************/
/*
  Chaque switch est associé à une classe :
  - lightDarkSwitchInput avec la classe dark
  - dysSwitchInput avec la classe dys
  - bigFontSwitchInput avec la classe bigFont

  Etape 1 : Lorsque l'utilisateur clique sur un switch,
            ajouter / enlever sa classe associée dans la liste des classes du <body>
  Etape 2 : A chaque changment d'état d'un switch, le sauvegarder dans le localStorage.
            Puis, lorsque l'utilisateur ferme et réouvre la page,
            restaurer l'état des switch depuis la dernière sauvegarde
*/

document.addEventListener('DOMContentLoaded', () => {
  
  //récupérer les boutons/switch
  let dark = document.querySelector("#lightDarkSwitchInput");
  let dys = document.querySelector("#dysSwitchInput");
  let bigFont = document.querySelector("#bigFontSwitchInput");
  
  //récupérer le body
  let body =document.querySelector("body");
  
  
  // ajout de l'écouteur d'évenement pour toggle au clic la classe
  // ajout dans le localStorage avec setItem la classe à sauvegarder
  dark.addEventListener("click", () =>{
    body.classList.toggle("dark");
    localStorage.setItem("dark", body.classList.contains("dark"));
    
  });
  
  dys.addEventListener("click", () =>{
    body.classList.toggle("dys");
    localStorage.setItem("dys", body.classList.contains("dys"));
  });
  
  bigFont.addEventListener("click", () =>{
    body.classList.toggle("bigFont");
    localStorage.setItem("bigFont", body.classList.contains("bigFont"));
  });
  
  
  //fonction qui ajoute les classes qui ont été sauvegarder dans le localStorage avec getItem.
  function memoire(className,switchInput){
    //creation d'un constante pour vérifier ensuite si la classe est bien sauvegarder dans le localStorage
    const souvenir = localStorage.getItem(className) === "true";
    if (souvenir) {
      body.classList.add(className);
      //on réaplique égallement la position du switch sur "on" pour évité un décallage entre "on" et "off" 
      switchInput.checked = true;
    }
  }
  
  
  
  //setting
  memoire("dark", dark);
  memoire("dys", dys);
  memoire("bigFont", bigFont);
  
});