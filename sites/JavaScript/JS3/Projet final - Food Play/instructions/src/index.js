document.addEventListener('DOMContentLoaded', function() {

let productsCollection = [{
    "_id": "3850104053221",
    "product_name": "Tomatenmark"
  },
  {
    "_id": "0041000120039",
    "product_name": "Pulpe de tomate",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/004/100/012/0039/front_en.3.200.jpg"
  },
  {
    "_id": "0042010348901",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/004/201/034/8901/front_en.3.200.jpg"
  },
  {
    "_id": "0044152146346",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/004/415/214/6346/front_en.3.200.jpg"
  },
  {
    "_id": "8904293703414",
    "product_name": "Tomato Desi Local",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/890/429/370/3414/front_en.3.200.jpg"
  },
  {
    "_id": "5059697682940",
    "product_name": "Tomato, Mascarpone and Basil Risotto",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/505/969/768/2940/front_en.3.200.jpg"
  },
  {
    "_id": "03337172",
    "product_name": "Tomatoes",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/03337172/front_en.3.200.jpg"
  },
  {
    "_id": "8426756050137",
    "product_name": "Bio Pflaumen Tomaten",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/842/675/605/0137/front_en.3.200.jpg"
  },
  {
    "_id": "5010525179933",
    "product_name": "Tomato, Feta & Caramelized Onion Quice",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/501/052/517/9933/front_en.3.200.jpg"
  },
  {
    "_id": "7035620048814",
    "product_name": "Hakkede tomater - Spicy chili",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/703/562/004/8814/front_en.3.200.jpg"
  },
  {
    "_id": "0022314450739",
    "product_name": "Palets de tomate de provence surgelés",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/002/231/445/0739/front_fr.3.200.jpg"
  },
  {
    "_id": "8008857010038",
    "product_name": "Polpa Pomodoro",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/800/885/701/0038/front_fr.3.200.jpg"
  },
  {
    "_id": "7340083469619",
    "product_name": "ekologiska Passerade tomater"
  },
  {
    "_id": "4311527008698",
    "product_name": "Bio Rispentomaten",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/431/152/700/8698/front_en.5.200.jpg"
  },
  {
    "_id": "8850511321055",
    "product_name": ""
  },
  {
    "_id": "8858790900183",
    "product_name": "ปลากระป๋อง ไฮเชฟ",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/885/879/090/0183/front_th.3.200.jpg"
  },
  {
    "_id": "8857122646959",
    "product_name": "มะเขือเทศเชอร์รี่ พร้อมพริกเกลือ - 110 g",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/885/712/264/6959/front_th.5.200.jpg"
  },
  {
    "_id": "43084499",
    "product_name": "pasta sauce"
  },
  {
    "_id": "0072940100942",
    "product_name": "Enchilada Sauce",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/007/294/010/0942/front_en.6.200.jpg"
  },
  {
    "_id": "0057000039844",
    "product_name": "heinz"
  }
];

/*
 * Affiche la collection products dans le tableau portant la classe "js-products-list"
*/let tableau = document.querySelector(".js-products-list tbody");
console.log(tableau)
function displayProducts(products) {
      tableau.innerHTML = "";
      products.forEach((product)=>{
      //ligne
      const tr = document.createElement("tr");
      //stockage id
      tr.dataset.id = product._id;
      //nom produit
      const productName = document.createElement("td");
      productName.innerText=`${product.product_name}`;
      
      //img
      const tdImg = document.createElement("td");
      const productImg= document.createElement("img");
      productImg.src=`${product.image_front_small_url}`;
      tdImg.appendChild(productImg); 
      //bouton
      const button1 =document.createElement("button");
      const button2 =document.createElement("button");
      const tdButton1 =document.createElement("td");
      const tdButton2 =document.createElement("td");
      button1.innerText="supprimer";
      button2.innerText="modifier";
      tdButton1.appendChild(button1)
      tdButton2.appendChild(button2)
      
      //mise en place dans le tableau/tbody
      tr.appendChild(productName);
      tr.appendChild(tdImg);
      tr.appendChild(tdButton1);
      tr.appendChild(tdButton2);
      tableau.appendChild(tr);
      
      //évent
      onDeleteProduct(button1,tr)
      onEditProduct(button2,tr,productName)
      onUpdateProduct(tr,productName)
    });
}
displayProducts(productsCollection);

/*
 * Affiche la modale avec formulaire d'ajout d'un produit
 */
function onAddProduct() {
  let buttonAdd = document.querySelector(".js-add-product");
  let form = document.querySelector(".js-modale-container");
  let promptProduct = document.querySelector("#productNameId");
  buttonAdd.addEventListener("click", () =>{
    form.classList.add("visible")
    promptProduct.value="";
  });
}
onAddProduct()
/*
 * Ferme la modale
 */
function onCloseModale() {
 let form = document.querySelector(".js-modale-container");
  let closeForm = document.querySelector(".js-close-button");
  closeForm.addEventListener("click", () =>{
    form.classList.remove("visible")
  });
}
onCloseModale()
/*
 * Créer un produit dans la liste à partir des données saisies dans le fomulaire
 */
function onCreateProduct() {
  let form = document.querySelector(".js-modale-container");
  let saveNewProduct = document.querySelector(".js-save-button");
  let promptProduct = document.querySelector("#productNameId");
 
  saveNewProduct.addEventListener("click", (event) =>{
    console.log(promptProduct.value)
    event.preventDefault();
    form.classList.remove("visible")
    productsCollection.push({
    product_name: promptProduct.value,
    image_front_small_url: "" 
  });
  displayProducts(productsCollection);
  });
  
}
onCreateProduct()
/*
 * Supprime un produit de la collection
 */
function onDeleteProduct(event,tr) {
  event.addEventListener("click", ()=>{
    const productId = tr.dataset.id;
    tableau.removeChild(tr);
    productsCollection = productsCollection.filter(p => p._id !== productId);
    console.log(productsCollection)
  })
}

/**
 * Recherche un produit via l'API https://world.openfoodfacts.org/api/v2/search
 */
function onSearchProducts() {
  let search = document.querySelector(".js-search-query")
  let buttonSearch =document.querySelector(".js-search-products")
  
  buttonSearch.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log(search.value)
    let newTableau =[];
    fetch(`https://world.openfoodfacts.org/api/v2/search?categories_tags=${search.value}`).then((response) => {
      if (response.ok) {
          response.json().then((data) => {
              console.log(data);
              data.products.forEach((d)=>{
                console.log(d.product_name)
                
                newTableau.push({
                _id: d._id, 
                product_name: d.product_name,
                image_front_small_url: d.image_front_small_url, 
                });
                
              })
              tableau.innerHTML = "";
              displayProducts(newTableau);
          });
      } else {
          console.log('La requête a échoué');
          console.log(response);
      }
    });
  })
  
}
onSearchProducts()
/**
 * Affiche la modale avec le formulaire rempli par les données du produit à modifier
 */
function onEditProduct(event,tr,name) {
  let form = document.querySelector(".js-modale-container");
  let promptProduct = document.querySelector("#productNameId");
   event.addEventListener("click", ()=>{
    form.classList.add("visible")
    promptProduct.value=name.innerText;
  })
}

/**
 * Met à jour le produit dans la collection avec les données saisies dans le fomulaire
 */
function onUpdateProduct(tr,name) {
  let saveNewProduct = document.querySelector(".js-save-button");
  let promptProduct = document.querySelector("#productNameId");
  saveNewProduct.addEventListener("click", () =>{
    
  })
}



});
