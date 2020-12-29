//Je récupére les élèments 
let Panier = document.getElementById("teddyCard");
let totalP = document.getElementById("totalPanier");
let mainPanier = document.getElementById("mainPanier")


//Création de la variable
let totalProduitPanier = 0 ;


//récupération des données stocker dans le localStorage
let teddyPanier = Object.keys(localStorage) 
//console.log(teddyPanier)


//création d'une condition pour si le panier est vide
if (teddyPanier.length == 0) {
    //
    let panierVide = document.createElement("p");
    mainPanier.appendChild(panierVide);
    panierVide.className = "basket_empty"
    panierVide.innerHTML =`Votre panier est vide`
}else{
  function recuperationBasket() {
    //création d'une boucle pour récupérer les éléments du panier
		for(let element of teddyPanier){
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
  recuperationBasket(teddyPanier) 
}

//FIN DE LA FONCTION

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
//console.log(totalPrixPanier)


//Bouton envoi
btnValide = `<button><a class='lien' href="confirmation.html"></a></button>`;
console.log(btnValide)


//récupération de l'id produit
let productsId = [];
console.log(productsId)
function recupId() {
  for(let element of teddyPanier){
    console.log(element)
    let teddyStorage = JSON.parse(localStorage.getItem(element))
    console.log(teddyStorage)
    productsId.push(teddyStorage.id)
  }
}
recupId(teddyPanier)
console.log(teddyPanier)


/*partie formulaire */



let reponseAddress = document.getElementById('reponseAddress')
let reponseCity = document.getElementById('reponseCity')
let reponseMail = document.getElementById('reponseMail')

function lastNameTest(value) {
  return /^[a-zA-z ]{2,}$/.test(value)
}

lastName.addEventListener('change', function (e) {

  if(!lastNameTest(lastName.value)){
    reponseLastName.textContent = 'le champs nom comporte des erreurs'
    e.preventDefault()
    return false
  } else {
    console.log('true')
  }
})

function firstNameTest(value) {
  return /^[a-zA-z ]{2,}$/.test(value)
}
firstName.addEventListener('change', function (e) {
//function firstName (e){
  if(!firstNameTest(firstName.value)){
  reponseFirstName.textContent = 'le champs prénom comporte des erreurs'
  e.preventDefault()
  return false
  }else{
  console.log('true')
  }
})

function addressTest(value) {
  return /^[0-9]{1,3}([a-zA-Z ]+)$/.test(value)
}
address.addEventListener('change', function (e) {

  if(!addressTest(address.value)){
  reponseAddress.textContent = 'le champs adresse comporte des erreurs'
  e.preventDefault()
  return false
  }else{
  console.log('true')
  }
})

function cityTest(value) {
  return /^[a-zA-z ]{2,}$/.test(value)
}
city.addEventListener('change', function (e) {

  if(!cityTest(city.value)){
  reponseCity.textContent = 'le champs city comporte des erreurs'
  e.preventDefault()
  return false
  }else{
  console.log('true')
  }
})

function mailTest(value) {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/.test(value)
}
email.addEventListener('change', function (e) {
//function email (e){
  if(!mailTest(email.value)){
  reponseMail.textContent = 'le champs email comporte des erreurs'
  e.preventDefault()
  return false
  }else{
  console.log('true')
  }
})

let form = document.getElementById('form');
form.addEventListener('submit',(e) =>{
  
  if (lastNameTest(lastName.value) && firstNameTest(firstName.value) && addressTest(address.value) && cityTest(city.value) && mailTest(email.value) ){
     
  }else {
    e.preventDefault()
    return false
  }

  
  let  contact =  {
    firstName : firstName.value,
    lastName : lastName.value,
   address : address.value,
    city : city.value,
   email : email.value,
  }
  console.log(contact)

  
  e.preventDefault();
  
  products = productsId
  let valide = {
    contact,
    products,
  }
  console.log(valide)
  
  //j'envoi les donnée avec post
  fetch('http://localhost:3000/api/teddies/order',{
    method: 'POST',
    headers : {
      'content-type': 'application/json'
    },
    body : JSON.stringify(valide)
  })  
  
  
  .then(response => response.json())   
  .then(response => {
    localStorage.clear();
    
    let envoiCommande = {  
    	orderId : response.orderId ,
      totalPrixPanier : totalProduitPanier,
      nameConfirmation : firstName.value,    
    }    
    let commande = JSON.stringify(envoiCommande);
    localStorage.setItem("commande", commande); 
    window.location = "confirmation.html"
  })


}) 


console.log(form)

