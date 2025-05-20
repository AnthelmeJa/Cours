let somme = 0;
let notes = [12,12.5,6,19,5,5.5];
for (let i=0;i<notes.length;i++){
    somme += notes[i];
}

let moyenne = somme/notes.length;

console.log(moyenne)