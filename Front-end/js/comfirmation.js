let infoCommand = JSON.parse(localStorage.getItem("commande"))

if (infoCommand == null){
    let commandeNull = document.getElementById("commandeNull")
    commandeNull.className = "commandenull"
    commandeNull.innerHTML = "vous n\'avez pas de commande !!!! "
}else{

    let merci = document.getElementById("h2merci")
    merci.textContent = `Comfirmation de la commande N° ${infoCommand.nameComfirmation}, Merci de votre achat !!! `;

    let info = document.getElementById("info")
    info.textContent = "Récapitulatif de votre commande : ";

    let id = document.getElementById("idCommande")
    id.innerHTML = `numéro de commande : ${infoCommand.orderId}`;

    let price = document.getElementById("prixComfirmation")
    price.innerHTML = `Prix total de la commande : ${infoCommand.totalPriceBasket} €`;

    localStorage.clear();
}