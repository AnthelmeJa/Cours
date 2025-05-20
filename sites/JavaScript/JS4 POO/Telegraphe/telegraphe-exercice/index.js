/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif est de créer un télégraphe.
Cela consiste à convertir un texte alphanumérique en code morse.
Les espaces seront gardés tel quels.

TODO
- Demander à l'utilisateur de saisir un texte à télégraphier
- Convertir le texte en code morse
- Afficher le code morse dans la console

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
let codeMorse = [
  ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
  ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
  "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
  "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.",
  "-----"
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code sera implémenté ici...
let form = document.querySelector(`.form`);

let submit = document.querySelector("#submit");

function morse(){
  
  let link = {};

  alphabet.forEach((a, index) => {
    link[a] = codeMorse[index];
  });
  
  
  
  
  submit.addEventListener("click",(e)=>{
    
    e.preventDefault();
    let promptUser = document.querySelector(`#text`).value.toLocaleLowerCase();
    let promptMorse="";
    console.log(prompt)
    let p = document.createElement("p");
    
    for (let char of promptUser) {
      if (link[char]) promptMorse += link[char] + " ";
    }
    
    
    p.innerText=promptMorse;
    console.log(p)
    
    
    document.body.appendChild(p);
  })
}
 
morse()