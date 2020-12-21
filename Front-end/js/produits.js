/*constante de Url*/

const URL ="http://localhost:3000/api/teddies"

let oursContainer = document.getElementById("windowProduct")

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
		let divProduct = document.createElement("div");
    oursContainer.appendChild(divProduct);
    divProduct.className = "divProduct"
    console.log(divProduct)
    
	
		let divImg = document.createElement("div");
		divProduct.appendChild(divImg);
    divImg.className = "divImg"
    
    
		let imgProduct = document.createElement("img");
    divImg.appendChild(imgProduct);           
    imgProduct.src = Peluche.imageUrl;
    imgProduct.className = "imgProduct";
    
    
	
		let h2Product = document.createElement("h2");
    divProduct.appendChild(h2Product);
    h2Product.textContent = Peluche.name;
    h2Product.className = "h2Products";
    
		let blocProduct = document.createElement("div");
		divProduct.appendChild(blocProduct);
    blocProduct.className = "blocProduct";
    
    
    let textProduct = document.createElement("p");
    blocProduct.appendChild(textProduct);
    textProduct.textContent = Peluche.description;
    textProduct.className = "textProduct";

    
    let optionName = document.createElement("p"); 
    blocProduct.appendChild(optionName);
    optionName.textContent = "Choix" + " ";
    optionName.className = "optionName";
    
	
      let select = document.createElement("select");
      blocProduct.appendChild(select);


    let oursQuantity = document.createElement("div");
    blocProduct.appendChild(oursQuantity);
    oursQuantity.className = "quantity";

    
    let quantity = document.createElement("p");
    oursQuantity.appendChild(quantity);
    quantity.textContent = "Quantité";

    
    let btnQuantity = document.createElement("input");
    oursQuantity.appendChild(btnQuantity);
    btnQuantity.setAttribute("type","number");
    btnQuantity.setAttribute("value",0);
    btnQuantity.setAttribute("min",0);
    btnQuantity.className = "quantity_input";

    
    let divPrice = document.createElement("div");
    blocProduct.appendChild(divPrice);
    divPrice.className = "divPrice";

    
    let priceProduct = document.createElement("p");
    divPrice.appendChild(priceProduct);
    priceProduct.textContent = `Prix : ${Peluche.price/100} €`;
    priceProduct.className = "priceProduct";

    
  	let divBtn = document.createElement("div");
    divProduct.appendChild(divBtn);
    divBtn.className = "divBtnAjouter";

    
    let btnAjout = document.createElement("button");
    divBtn.appendChild(btnAjout);
    btnAjout.className = "btnAjout"
    btnAjout.innerHTML =`<a class="liens" href="panier.html" >Ajouter</a>`

    
    let btnReturn = document.createElement("button");
    divBtn.appendChild(btnReturn);
    btnReturn.className = "btnReturn";
    btnReturn.innerHTML =`<a  class="liens" href="index.html" >Retour</a>`;

   
    btnAjout.addEventListener("click",envoiDuProduit) 
    function envoiDuProduit(event){
    	//j'impose une condition de sélectionner une quantité           	
      if (btnQuantity.value == 0 ){
        alert("Veuillez sélectionner une quantité")
        event.preventDefault();           
      }else{
       
        priceProduct.textContent = ((peluche.price / 100) * (+btnQuantity.value)) + "€";
        
			
				let pelucheBasket = {
					id : peluche._id,
					name : peluche.name,
					price : peluche.price/100,
					description : peluche.description,
					imageUrl : peluche.imageUrl,
					select: select.value,	
					qty : btnQuantity.value 
				}    
			
				//affiche dans le local storage
				let objectifOption = JSON.stringify(pelucheBasket);
        localStorage.setItem(peluche._id, objectifOption);
				alert (`${btnQuantity.value} ${ Peluche.name} ${select.value} ajouté au panier `);
      }  
    }
  }
  afficherLeProduit(windowProduct);   
});