
for (let i = 0; i < 3; i++) {// i++ => i = i + 1
    /*
      Affiche :
      miaou 0
      miaou 1
      miaou 2
    */
    console.log('miaou ' + i);
}

/*

1ère itération

let i = 0;
console.log('miaou ' + i);// Affiche miaou 0

2ème itération
i++; // i = i + 1 => 0 + 1 = 1

i < 3 ? true car 1 < 3

console.log('miaou ' + i);// Affiche miaou 1

3ème itération
i++; // i = i + 1 => 1 + 1 = 2

i < 3 ? true car 2 < 3

console.log('miaou ' + i);// Affiche miaou 2

4ème itération
i++; // i = i + 1 => 2 + 1 = 3

i < 3 ? false car 3 pas < 3

On sort de la boucle et continue le programme

*/

// Parcourir un tableau et afficher chaque éléemnt
let fruits = ["banane","pomme","poire"];

for (let i =0; i< fruits.length ; i++){
    let element = fruits[i];
    console.log(element);
}