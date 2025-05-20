function prendreFeuille(){
    console.log("prendre 1 feuille de brick")
}
function mettreFarce(){
    console.log("mettre farce dans feuille brick")
}
function roulerNem(){
    console.log("rouler le nem")
}


for (let i=0; i<=150;i++){
    prendreFeuille();
    mettreFarce();
    roulerNem();
}

function cuireNems(){
    console.log("cuire nem")
}
function egoutterNems(){
    console.log("egoutter 50 nems")
}


for (let i=0; i<=3;i++){
    for(let j=0;j<=50;j++){
    cuireNems();
    }
    egoutterNems();
}

