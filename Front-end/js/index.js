
/* récup' de la div container*/ 
let container = document.getElementById("container");

//requête fetch
fetch("http://localhost:3000/api/teddies") 
.then(function(response){                   //je récupére les données de l'api
  return response.json()
})
.then (function (data) {
  for(let element of data)  { 
    console.log(element)     // je fais une boucle pour récupéré toutes les données du tableau
    
    let div = document.createElement('div');
    container.appendChild(div);
    div.className = ("cader")
    
    function afficherLesImages(element){
      let imagesOurs = document.createElement('img');
      div.appendChild(imagesOurs);
      imagesOurs.src = element.imageUrl;       
      imagesOurs.className = "img1";
      console.log(imagesOurs)
    }
    afficherLesImages(element)
   
    let textProducts = document.createElement('div');
    div.appendChild(textProducts);
    textProducts.className = "text-product";
   
    function afficherLesNoms(element){
      let h2 = document.createElement('h2');
      textProducts.appendChild(h2);
      h2.textContent = element.name;
    }
    afficherLesNoms(element)
   
    function descriptionOurs(element){
      let infoOurs = document.createElement('p');
      textProducts.appendChild(infoOurs);
      infoOurs.textContent = element.description;
      infoOurs.className = "desciption";
    }
    descriptionOurs(element);
   
    function priceOurs(element){
      let price = document.createElement('p');
      textProducts.appendChild(price);
      price.textContent = `${element.price/100} €`;
      price.className = "price";  
    }
    priceOurs(element);
   
    function buttonId (){
      let buttonInfo = document.createElement('button');
      textProducts.appendChild(buttonInfo);
      buttonInfo.className = "btn";
      buttonInfo.innerHTML = `<a  class="liens" href="produit.html?id=${element._id}" >Aperçu</a>`
    }
    buttonId(element)  
  }       
}) 
.catch(function(error) {
  console.log(error)
});