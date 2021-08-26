// clés = element.placeholder
const form = document.getElementById('form');
const formValide = [0, 0, 0, 0, 0];
const regPaterns = {
  "Nom":      /^[a-zA-z ]{2,}$/,
  "Prénom":   /^[a-zA-z ]{2,}$/,
  "Adresse":  /^[0-9]{1,3}([a-zA-Z ]+)$/,
  "Ville":    /^[a-zA-z ]{2,}$/,
  "E-mail":   /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/
};

function inputTest(value, patern)
{

  return patern.test(value);
}

//  recuperer les enfant du formulaire selon leur position dans la liste
// mettre a jour le tableau de validité
let childOfForm = form.getElementsByTagName("input");

let valueOfChild = Object.values(childOfForm);

console.log(childOfForm)
console.log(valueOfChild)

function changeCallBack(e){

  let elementPlaceholder = e.target.placeholder;
  let currentId = valueOfChild.indexOf(e.target);
  let messageElement = document.getElementById("response-"+ e.target.id);
    

  if(!inputTest(e.target.value, regPaterns[elementPlaceholder]))
  {
    // small
    messageElement.textContent = "le champs "+elementPlaceholder.toLowerCase()+" n'est pas valide !";
    messageElement.classList.add("visible");
    messageElement.classList.remove("hidden");

    formValide[currentId] = 0;
  }
  else 
  {
    formValide[currentId] = 1;
    messageElement.classList.remove("visible");
    messageElement.classList.add("hidden");
    
  }

  if(formValide < 0)
  {
    formValide = 0;
    
  }
  else if(formValide > 5)
  {
    formValide = 5;
    
  }

  console.log(formValide);
}


lastName.addEventListener('change', changeCallBack);


firstName.addEventListener('change', changeCallBack);


address.addEventListener('change',changeCallBack);


city.addEventListener('change', changeCallBack);


email.addEventListener('change', changeCallBack);


form.addEventListener('submit',(e) =>{

  e.preventDefault()

  let  contact =  {
    firstName : firstName.value,
    lastName : lastName.value,
    address : address.value,
    city : city.value,
    email : email.value,
  }

  if (formValide.indexOf(0) == -1){
    //console.log("soumis")
    // console.log(contact)    
    products = productsId;
    let valide = {
      contact,
      products,
    }
    // console.log(valide)
    
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
  }

  else
  {
    return false
  }
}) 


console.log(form)

