
  //exercice 1  
function attendre(ms) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
    }, ms)
   })   
}

console.log("Début");
attendre(2000).then(() => {
  console.log("Fin 2 secondes plus tard");
});

//exercice 2
function step1() {
  // TODO retourner la chaine "step 1 complete" au bout de 1s
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            
        resolve("step 1 complete");
            
    }, 1000)
   }) 
  
}
function step2() {
  // TODO retourner la chaine "step 2 complete" au bout de 1.5s
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            
        resolve("step 2 complete");
            
    }, 1500)
   }) 
}
function step3() {
  // TODO retourner la chaine "step 3 complete" au bout de 0.5s
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            
        resolve("step 3 complete");
            
    }, 500)
   }) 
}

step1()
  .then(step2)
  .then(step3)
  .then(() => console.log("Processus completed"));


//exercice 3

function callCatFactApi() {
  const apiUrl = "https://catfact.ninja/fact";

  return fetch(apiUrl)
    .then((response) => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error(response);
      }
    });
}

callCatFactApi()
    .then((fact) => console.log(fact.fact))

//exercice 4

function callCatFactApi() {
  const apiUrl = "https://catfact.ninja/fact";

  return fetch(apiUrl)
    .then((response) => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error(response);
      }
    });
}

let promises = [];

for(let i =0; i<5;i++){
  callCatFactApi();
  callCatFactApi()
    .then((fact) => promises.push(fact.fact))
}

console.log(promises)