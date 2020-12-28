let panier = document.getElementById("oursCard");
let totalPanier = document.getElementById("totalPanier");
let mainPanier = document.getElementById("mainPanier");

let totalPanierProduct = 0 ; 

let oursPanier = Object.keys(localStorage)

if (oursPanier.length == 0){
    let panierEmpty = document.createElement("p");
    mainPanier.appendChild(panierEmpty);
    panierEmpty.className = "panierEmpty";
    panierEmpty.innerHTML = `Votre panier est vide. <i class="far fa-frown"></i>`
}else{
    function recupePanier(){
        for(let element of oursPanier){
            console.log(element)

            let oursStorage = JSON.parse(localStorage.getItem(element))
            console.log(oursStorage)

        const imgPanier = document.createElement("img");
        panier.appendChild(imgPanier);
        imgPanier.src = oursStorage.imageUrl;
        imgPanier.setAttribute("alt", "ours en peluche");
        imgPanier.className = "imgPanier";
        console.log(imgPanier)
        }
    }
}