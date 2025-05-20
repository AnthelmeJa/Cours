// Faire en sorte que l'élément ayant la classe .js-diddle suive la souris
// lorsque celle-ci bouge
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('mousemove', function (event) {
        let x = event.clientX;
        let y = event.clientY;
        
        let elementDOM = document.querySelector('.diddle');
        elementDOM.style.left = x + 'px';
        elementDOM.style.top = y + 'px';
    });
});