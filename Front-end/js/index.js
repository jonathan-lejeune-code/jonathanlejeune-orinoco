/*constante de Url*/

const URL = "https://lj-orinoco.herokuapp.com/api/teddies"


/* récup' de la div container*/

let container = document.getElementById("container");

/*requête fetch*/

fetch("https://lj-orinoco.herokuapp.com/api/teddies")
  .then(function (response) {
    /*je récupére les données de l'api */
    return response.json()
  })

  .then(function (data) {
    for (let element of data) {
      console.log(element) /* boucle pour tous le tableau */

      let div = document.createElement("div");
      container.appendChild(div);
      div.className = ("cader")


      let imagesOurs = document.createElement("img");
      div.appendChild(imagesOurs);
      imagesOurs.src = element.imageUrl;
      imagesOurs.className = "img1";
      console.log(imagesOurs)


      let textProducts = document.createElement("div");
      div.appendChild(textProducts);
      textProducts.className = "text-product";


      let h2 = document.createElement("h2");
      textProducts.appendChild(h2);
      h2.className = "h2ours"
      h2.textContent = element.name;



      let infoOurs = document.createElement("p");
      textProducts.appendChild(infoOurs);
      infoOurs.textContent = element.description;
      infoOurs.className = "description";



      let price = document.createElement("p");
      textProducts.appendChild(price);
      price.textContent = `${element.price/100} €`;
      price.className = "price";



      let buttonInfo = document.createElement("button");
      textProducts.appendChild(buttonInfo);
      buttonInfo.className = "btn";
      buttonInfo.innerHTML = `<a  class="lienA" href="produits.html?id=${element._id}" >Voir Le Produit</a>`

    }

  })

  .catch(function (error) {
    console.log(error)
  });