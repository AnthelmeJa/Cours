document.addEventListener('DOMContentLoaded', function() {
    
    document.addEventListener('keydown', function(event) {
        // Code touche appuyée
        let code = event.code;
        console.log(code);
        
        // Récupérer l'élément HTML
        let element = document.querySelector('.red-square');
        console.log(element);
        
         if (code === 'ArrowLeft') {
            element.style.paddingLeft = "10px"
        }else
        if (code === 'ArrowRight') {
            element.style.right = "10px"
        }else
        if (code === 'ArrowUp') {
            element.style.top = "10px"
        }else
        if (code === 'ArrowDown') {
            element.style.bottom = "10px"
        }
    });
    
});
