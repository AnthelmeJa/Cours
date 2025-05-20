// RAPPEL : S'assurer que le DOM est chargé en mémoire avant de jouer avec
document.addEventListener('DOMContentLoaded', function () {
    let boxDOM = document.querySelector('.red-square');
    boxDOM.style.backgroundColor = 'yellow';
    boxDOM.style.borderColor = 'red';
});
