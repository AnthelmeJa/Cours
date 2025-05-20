'use strict'

const ball = document.getElementById('ball');
let x = 0;
const speed = 2;
const width = window.innerWidth - 40;
const height = window.innerHeight - 40;
console.log(width)
let count=false;


function animate() {
   
    if(x<width && count ===false){
        x+= speed;
        ball.style.left = x + 'px';
        ball.style.transform="rotate(45deg)";
        
    }else if (x>0){
        count=true
        x-= speed;
        ball.style.left = x + 'px';
    }else if(x===0){
        count=false
    }
    
   
       
    
    
    
    
    // Dit à JS qu'au prochain rafraichement de l'écran, tu appelles cette fonction
    requestAnimationFrame(animate);
}

animate(); // Démarre l'animation