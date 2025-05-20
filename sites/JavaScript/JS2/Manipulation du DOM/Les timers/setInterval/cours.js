
function afficheToto() {
    console.log('toto');
}

let timerId = setInterval(afficheToto, 1000);

clearInterval(timerId);
