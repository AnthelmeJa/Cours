'use strict';
document.addEventListener('DOMContentLoaded', function () {
/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
    let bouton = document.querySelector("#firing-button");
    let rocket = document.querySelector("#rocket");
    let board = document.querySelector("#billboard span");
    let time=10;
    let timerId=null;
    
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

    function timer() {
    time--
    const timeDisplay = time.toString().padStart(2, '0');
    board.innerText=timeDisplay
    if(time === 0){
            clearInterval(timerId);
            timerId = null;
            rocket.src="images/rocket3.gif"
            rocket.classList.add("tookOff");
        }
    };
    
    

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

    bouton.addEventListener("click",() => {
        if (time <= 0 || timerId !== null) return;
        const timeDisplay = time.toString().padStart(2, '0');
        board.innerText=timeDisplay;
        bouton.classList.add("disabled");
         bouton.disabled = true;  
        rocket.src="images/rocket2.gif"
        if(timerId ===null){
           timerId = setInterval(timer, 1000); 
        }
        
    });
    
    
});