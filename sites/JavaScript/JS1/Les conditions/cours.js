
// Les opérateurs de comparaison : === !== < > <= >=
// Une operation de comparaison retourne un booleen
console.log('a' === 'b');

console.log('23' == 23);// Retourne true, éviter de l'utiliser
console.log('23' === 23);// Retourne false car les types sont différents, à privilégier


console.log('a' !== 'b');

console.log('23' != 23);// Retourne false, éviter de l'utiliser
console.log('23' !== 23); // Retourne true car les types sont différents, à privilégier

console.log(1 < 2);
console.log(1 < 1);
console.log(2 > 1);
console.log(2 > 2);
console.log(1 <= 2);
console.log(1 <= 1);
console.log(2 <= 1);
console.log(2 >= 1);
console.log(2 >= 2);
console.log(1 >= 2);


// Conditions
if ('a' === 'b') {
    console.log('Egalité est true');
}

console.log('Dans tout les cas, continue le processus');


// Condition si, sinon
if ('a' === 'b') {
    console.log('Egalité est true');
} else {
    console.log('Egalité est false');
}

console.log('Dans tout les cas, continue le processus');

// Chainer les si, sinon si, sinon
if ('a' === 'b') {
    console.log('Egalité est true');
} else if ('c' === 'c') {
    console.log('Egalité c === c est true');
} else {
    console.log('Aucune égalité');
}

console.log('Dans tout les cas, continue le processus');


if ('a' === 'b') {
    console.log('Egalité est true');
} 

// Va exécuter le test si dessous peu importe s'il est entré ou non dans le if ci-dessus
// Alors qu'en mettant un else if à la place,
/// il va exécuter le test uniquement s'il n'est pas rentré dans le if ci-dessus
if ('c' === 'c') {
    console.log('Egalité c === c est true');
} else {
    console.log('Aucune égalité');
}

console.log('Dans tout les cas, continue le processus');


let state = "started";

if (state === 'started') {
    console.log('Démarré')
} else if (state === 'stopped') {
    console.log('Arrêté');
} else if (state === 'inprogress') {
    console.log('En cours');
} else {
    console.error('Etat ' + state + ' inconnu');
}


if (state === 'started') {
    console.log('Démarré');
} else if (state === 'stopped') {
    console.log('Arrêté');
} else if (state === 'inprogress') {
    console.log('En cours');
} else {
    console.error('Etat ' + state + ' inconnu');
}

// Peut s'écrire

switch (state) {
    case 'started':
        console.log('Démarré');
        break;
    case 'stopped':
        console.log('Arrêté');
        break;
    case 'inprogress':
        console.log('En cours');
        break;
    default:
        console.error("Etat "+state+" inconnue");
}
