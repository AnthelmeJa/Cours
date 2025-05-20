const invites = ['Pierre', 'Paul', 'Jacques', 'Valentin', 'Laura', 'Jean-Charles', 'Pierre-Emmanuel', 'Robert', 'Jennifer'];
const smallBox=[];
const mediumBox=[];
const bigBox=[];




for (let i=0; i<invites.length; i++){
    if(invites[i].length <= 6){
        smallBox.push(invites[i]);
    }else if ( invites[i].length <= 8){
        mediumBox.push(invites[i]);
    }else{
        bigBox.push(invites[i]);
    }
}

function affichage1 (){
    
    document.write(`<h2>smallBox</h2>`);
    document.write("<ul>");
    for (let i=0; i<smallBox.length; i++){
        document.write(`<li>${smallBox[i]}</li>`);
        
    }
    document.write(`${smallBox.length}`);
    document.write("</ul>");
    
}
function affichage2 (){
    
    document.write(`<h2>mediumBox</h2>`);
    document.write("<ul>");
    for (let i=0; i<mediumBox.length; i++){
        document.write(`<li>${mediumBox[i]}</li>`);
    }
    document.write(`${mediumBox.length}`);
    document.write("</ul>");
}
function affichage3 (){
    
    document.write(`<h2>bigBox</h2>`);
    document.write("<ul>");
    for (let i=0; i<bigBox.length; i++){
        document.write(`<li>${bigBox[i]}</li>`);
    }
    document.write(`${bigBox.length}`);
    document.write("</ul>");
}

affichage1 ();
affichage2 ();
affichage3 ();



console.log(smallBox);
console.log(mediumBox);
console.log(bigBox);

