let joueurUn = "X";
let joueurDeux= "O";
const cells = document.querySelectorAll(".cell");
let tourDeJoueur = joueurUn;
let nombreDeTours =0
let gameStatus = document.querySelector(".gameStatus");

cells.forEach(cell => {
    
    cell.addEventListener("click", playGame, {once:true});
    nombreDeTours++
    console.log(nombreDeTours)
});



function playGame(e){
    e.target.innerHTML = tourDeJoueur;

    if(tourDeJoueur === joueurUn){
        
        tourDeJoueur = joueurDeux;
       gameStatus.innerHTML = "C'est au tour du joueur 2"
    }else if(tourDeJoueur === joueurDeux){
        
        tourDeJoueur = joueurUn;
        gameStatus.innerHTML = "C'est au tour du joueur 1"
    }

}


//if vitoryPatterns[i]===cells[i] alors victoire mais ne prend pas en compte X ou O 
// if cells[i]===victoryPatterns[i]else if victory[i]===joueurUn alors victoire de X ?
//que faire ?  
const VictoryPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
    

function VictoryPatternTarget(){
    

    for (let i =0; i > VictoryPatterns.length;i++){
        let VictoryPattern=VictoryPatterns[i];
        return VictoryPattern
    }
}



for (let j =0; j < cells.length;j++){
    if (cells[i]===VictoryPatternTarget(VictoryPattern)){
        if (VictoryPattern===joueurUn){
            gameStatus.innerHTML = "Joueur 1 à gagné"
        }
    } 
}




//Code du tuto 
//je comprend pas donc je verrais un autre jours cette méthode 
/*function checkWin(tourDeJoueur) {
    return VictoryPatterns.some(combination => {
        return combination.every(index => {
            return cells[index].innerHTML == tourDeJoueur
        })
    })
}


function checkDraw(){
    return [...cells].every(cell =>{
        return cell.innerHTML == joueurUn || cell.innerHTML == joueurDeux;
    })
} 

if(checkWin(tourDeJoueur)){
    gameStatus.innerHTML = tourDeJoueur+" à gagné"
}else if(checkDraw()){
    gameStatus.innerHTML = "match null"
}*/

