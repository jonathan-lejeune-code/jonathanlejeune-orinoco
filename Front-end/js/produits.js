/*constante de Url*/

const URL ="http://localhost:3000/api/teddies"

const oursContainer = document.getElementById("windowProduct")

//récupération de l'id du produit
function getId(){
	const param = window.location.search
	const id = param.replace("?id=","") 
	if (!id) throw new Error ("il manque l\'id")
	return id
}


fetch ("http://localhost:3000/api/teddies/" + getId())
.then(windowProduct => windowProduct.json())
.then(windowProduct => {console.log(windowProduct) 

	function afficherLeProduit(Peluche) {

   /*structure HTML */
		const divProduct = document.createElement("div");
    oursContainer.appendChild(divProduct);
    divProduct.className = "divProduct"
    console.log(divProduct)
    
	
		const divImg = document.createElement("div");
		divProduct.appendChild(divImg);
    divImg.className = "divImg"
    
    
		const imgProduct = document.createElement("img");
    divImg.appendChild(imgProduct);           
    imgProduct.src = Peluche.imageUrl;
    imgProduct.className = "imgProduct";
    
    
	
		const h2Product = document.createElement("h2");
    divProduct.appendChild(h2Product);
    h2Product.textContent = Peluche.name;
    h2Product.className = "h2Product";
    
		const blocProduct = document.createElement("div");
		divProduct.appendChild(blocProduct);
    blocProduct.className = "blocProduct";
    
    
    const textProduct = document.createElement("p");
    blocProduct.appendChild(textProduct);
    textProduct.textContent = Peluche.description;
    textProduct.className = "textProduct";

    
    const option = document.createElement("p"); 
    blocProduct.appendChild(option);
    option.textContent = "Choix" + " ";
    option.className = "option";
    
	
      const select = document.createElement("select");
      blocProduct.appendChild(select);

      for (let color of windowProduct.colors){
       
        let option = document.createElement('option')
        select.appendChild(option);
        option.innerHTML = color;
        select.setAttribute('value',color)
        select.id = ('value', windowProduct.colors.value); 
      }

    const oursQuantity = document.createElement("div");
    blocProduct.appendChild(oursQuantity);
    oursQuantity.className = "oursquantity";

    
    const quantity = document.createElement("p");
    oursQuantity.appendChild(quantity);
    quantity.textContent = "Quantité";
    quantity.className = "quantity";

    
    const btnQuantity = document.createElement("input");
    oursQuantity.appendChild(btnQuantity);
    btnQuantity.setAttribute("type","number");
    btnQuantity.setAttribute("value",1);
    btnQuantity.setAttribute("min",0);
    btnQuantity.className = "quantityInput";

    
    const divPrice = document.createElement("div");
    blocProduct.appendChild(divPrice);
    divPrice.className = "divPrice";

    
    const priceProduct = document.createElement("p");
    divPrice.appendChild(priceProduct);
    priceProduct.textContent = `Prix : ${Peluche.price/100} €`;
    priceProduct.className = "priceProduct";

    
  	const divBtn = document.createElement("div");
    divProduct.appendChild(divBtn);
    divBtn.className = "divBtnAjouter";

    
    const btnAjout = document.createElement("button");
    divBtn.appendChild(btnAjout);
    btnAjout.className = "btnAjout"
    btnAjout.innerHTML =`<a class="liens" href="panier.html" >Ajouter aux Panier</a>`

    
    const btnReturn = document.createElement("button");
    divBtn.appendChild(btnReturn);
    btnReturn.className = "btnReturn";
    btnReturn.innerHTML =`<a  class="lien" href="index.html" >Retour</a>`;

   
    btnAjout.addEventListener("click",envoiDuProduit) 
    function envoiDuProduit(event){
    	//condition de sélectionner d'une quantité           	
      if (btnQuantity.value == 0 ){
        alert("Veuillez sélectionner une quantité")
        event.preventDefault();           
      }
      else{
       
        priceProduct.textContent = ((Peluche.price / 100) * (+btnQuantity.value)) + "€";
        
			
          let PeluchePanier = {
            id : Peluche._id,
            name : Peluche.name,
            price : Peluche.price/100,
            description : Peluche.description,
            imageUrl : Peluche.imageUrl,
            select: select.value,	
            qty : btnQuantity.value, 
          };    
			
				//affiche dans le local storage
			  	let PelucheOption = JSON.stringify(PeluchePanier);
        localStorage.setItem(Peluche._id, PelucheOption);
				alert (`${btnQuantity.value} ${ Peluche.name} ${select.value} ajouté au panier `);
      } 
    }
  }
  afficherLeProduit(windowProduct);   
});