/*partie formulaire */

let reponseLastName = document.getElementById('reponseLastName');

let mailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/
let NameReg = /^[a-zA-z ]{2,}$/
let addressReg = /^[0-9]{1,3}([a-zA-Z ]+)$/
let cityReg = /^[a-zA-z ]{2,}$/

let reponseAddress = document.getElementById('reponseAddress');
let reponseCity = document.getElementById('reponseCity');
let reponseMail = document.getElementById('reponseMail');

function lastNameTest(value) {
  return /^[a-zA-z ]{2,}$/.test(value)
}

lastName.addEventListener('change', function (e) {

  if(!lastNameTest(lastName.value)){
    reponseLastName.textContent = 'le champs nom comporte des erreurs'
    e.preventDefault()
    return false
  } else {
    console.log('true');
  }
})

function firstNameTest(value) {
  return /^[a-zA-z ]{2,}$/.test(value)
}
firstName.addEventListener('change', function (e) {

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
    window.location = "confirmation.html";
  })


}) 


console.log(form)

