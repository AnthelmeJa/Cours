const ball = document.getElementById('ball');
let x = 0;
const speed = 2;

function animate() {
    x+= speed;
    
    ball.style.left = x + 'px';
    
    // Dit à JS qu'au prochain rafraichement de l'écran, tu appelles cette fonction
    requestAnimationFrame(animate);
}

animate(); // Démarre l'animation
