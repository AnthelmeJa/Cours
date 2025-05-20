/* 
  Etape 1 : Récupérer depuis l'API un utilisateur généré aléatoirement
  Puis afficher les informations récupérées dans la console
  
  Etape 2 : Générer du HTML depuis Javascript pour afficher le nom et le prenom dans le navigateur
  ASTUCE : Utiliser document.createElement() pour se faire.
  
  ATTENTION : Nombre de requêtes limitées par personne sur l'API
*/
const apiUrl = "https://randomuser.me/api";
let button = document.querySelector(".button");
let container = document.querySelector(".container");


function toto(){
  fetch("https://randomuser.me/api").then((response) => {
      if (response.ok) {
          response.json().then((data) => {
              
              console.log(data)
              const p=document.createElement("p")
              const p2=document.createElement("p")
              const p3=document.createElement("p")
              const img=document.createElement("img")
              const div=document.createElement("div")
              const bouton=document.createElement("button")
              p.textContent=` ${data.results[0].name.first}  ${data.results[0].name.last}`;
              p2.textContent=`adresse: ${data.results[0].location.street.number} ${data.results[0].location.street.name} ${data.results[0].location.postcode} ${data.results[0].location.city} en ${data.results[0].location.country}.`;
              p3.textContent=`téléphone: ${data.results[0].phone}`;
              img.src= data.results[0].picture.large;
              bouton.textContent="delete";
              
              div.appendChild(bouton);
              div.appendChild(img);
              div.appendChild(p);
              div.appendChild(p2);
              div.appendChild(p3);
              container.appendChild(div);
              
              div.classList.add("card");
              setTimeout(() => {
                div.classList.add("appear");
              }, 10);
              const style = document.createElement("style");
              style.textContent = `
                  .container{
                    display:flex;
                  }
                  div{
                    background-color:#303130;
                    margin:3rem 1rem;
                    padding:1rem;
                    width:20%;
                  }
                   div p:first-of-type{
                    font-size: 26px;
                    font-weight: bold;
                  }
                 
                  p {
                      text-align: center;
                      font-size: 18px;
                      color:white;
                  }
                  .card {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                  }
                  
                  .card.appear {
                    opacity: 1;
                    transform: translateY(0);
                  }
                  
                  img {
                      display: block;
                      margin: 0 auto;
                      width: 150px;
                      border-radius:100px
                  }
              `;
              document.head.appendChild(style);
              
              bouton.addEventListener("click", ()=>{
                div.remove();
              });

              
          });
      } else {
          console.log('La requête a échoué');
          console.log(response);
      }
  });
}

button.addEventListener("click", ()=>{
  toto()
})

