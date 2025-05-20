document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('mousemove', function (event) {
        let x = event.clientX;
        let y = event.clientY;
        
        let elementDOM = document.querySelector('.navy-square');
        elementDOM.style.left = x + 'px';
        elementDOM.style.top = y + 'px';
    });
    /*
    let elementDOM = document.querySelector('.navy-square');
    elementDOM.addEventListener('mousemove', function (event) {
        console.log(event);
    });
    */
});
