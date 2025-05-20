'use strict'
document.addEventListener('DOMContentLoaded', function () {
    let centiTime=0
    let secondeTime = 0;
    let minuteTime = 0;
    let chrono = document.querySelector("#chrono");
    let play = document.querySelector("#play");
    let stop = document.querySelector("#stop");
    let reset = document.querySelector("#reset");
    let time = null;
    
    function chronometre() {
        centiTime++
        if(centiTime>=100){
          centiTime=0 
          secondeTime ++  
        }
        
        if(secondeTime>= 60){
            secondeTime=0;
            minuteTime++
        }
        chrono.innerHTML=`<p>${minuteTime} minute et  ${secondeTime},${centiTime} seconde se sont écoulées depuis que vous êtes ici</p>`;
        time = setTimeout(chronometre, 10);
    };
    
    play.addEventListener("click", () =>{
        if (time ===null){
           chronometre(); 
        }
        
    });
    
    stop.addEventListener("click", () =>{
        clearTimeout(time);
        time=null
    });
    
    reset.addEventListener("click", () =>{
        secondeTime=0;
        minuteTime=0;
        centiTime=0;
        chrono.innerHTML=`<p>${minuteTime} minute et  ${secondeTime},${centiTime} seconde se sont écoulées depuis que vous êtes ici</p>`;
    });
    
    
    
});


//bonus 3 
//Il y'a le délai du traitement et de l'affichage 
//il faut mettre délai(miliseconde) -1000 miliseconde = 1seconde .

//exemple un délai de 500 miliseconde donc 1 seconde = 500 miliseconde dans la fonction.