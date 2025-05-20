function commanderPizza(type) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (type === 'Margarita') {
                resolve('Pizza prête');
            } else {
                reject('Erreur de commande');
            }
        }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    commanderPizza('Margarita3')
        .then((msg) => console.log(msg))
        .catch((msgError) => console.error(msgError))
});
