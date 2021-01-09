//Je récupére les élèments 
const Panier = document.getElementById("teddyCard");
const totalP = document.getElementById("totalPanier");
const mainPanier = document.getElementById("mainPanier")

//Création de la variable
let totalProduitPanier = 0 ;

//déclaration de la fonction 
function recuperationPanier() {
  //création d'une boucle pour récupérer les éléments du panier
  
  for(let element in localStorage){
    console.log(element);

    let teddyStorage = JSON.parse(localStorage.getItem(element))
    console.log(teddyStorage)
    
    const divTextPanier = document.createElement("div");
    Panier.appendChild( divTextPanier);
    divTextPanier.className = " divTextPanier"
    console.log( divTextPanier)
  
    const imgPanier = document.createElement("img");
    divTextPanier.appendChild(imgPanier);
    imgPanier.src = teddyStorage.imageUrl;
    imgPanier.setAttribute("alt", "ours en Peluche");
    imgPanier.className = "imgPanier";
    console.log(imgPanier);

    const h2Panier = document.createElement("h2");
    divTextPanier.appendChild(h2Panier);
    h2Panier.textContent = teddyStorage.name;
    h2Panier.className = "h2Panier";
    console.log(h2Panier);
    
    const selectPanier = document.createElement("p");
    divTextPanier.appendChild(selectPanier);
    selectPanier.innerHTML = `Couleur : ${teddyStorage.select}`;
    selectPanier.className = "selectPanier";
    console.log(selectPanier);
    
    const qtyPanier = document.createElement("p");
    divTextPanier.appendChild(qtyPanier);
    qtyPanier.innerHTML = `Quantité : ${teddyStorage.qty}`
    qtyPanier.className = "qtyPanier";
    console.log(qtyPanier);
    
    const prixTeddyPanier = document.createElement("p");
    divTextPanier.appendChild(prixTeddyPanier);
    prixTeddyPanier.innerHTML = `Prix : ${teddyStorage.price * teddyStorage.qty} €`;
    console.log(prixTeddyPanier.innerHTML)
    prixTeddyPanier.className = "prixTeddyPanier";
    console.log(prixTeddyPanier)

    
    totalProduitPanier = totalProduitPanier + (teddyStorage.price * teddyStorage.qty );
    console.log(totalProduitPanier)
  }
}
recuperationPanier(localStorage) 

//FIN DE LA FONCTION

function recupId() {
  let productsId = [];
  for(let element in localStorage){
    console.log(element)
    let teddyStorage = JSON.parse(localStorage.getItem(element))
    console.log(teddyStorage)
    productsId.push(teddyStorage.id)
  }
}
//création d'une condition au cas ou le panier est vide
if (localStorage.length === 0) {
    
  const panierVide = document.createElement("p");
  mainPanier.appendChild(panierVide);
  panierVide.className = "panierVide"
  panierVide.innerHTML =`Votre panier est vide`
}else{
  recupetionPanier()
}

//bouton supprimer les articles
document.getElementById("removePanier").addEventListener("click", () => {
  localStorage.clear(); //efface
  location.reload(); //recharge la page
})

     
//afficher le prix total
let totalPrixPanier = document.createElement("p");
totalPrixPanier.className = 'totalPrixPanier';
totalPrixPanier.innerHTML = `Prix total de votre panier : ${totalProduitPanier} €`;
totalP.appendChild(totalPrixPanier)



//Bouton envoi
btnValide = `<button><a class='lien' href="confirmation.html"></a></button>`;
console.log(btnValide)


//récupération de l'id produit
let productsId = [];
console.log(productsId)

recupId()
//console.log()


