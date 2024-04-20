function displayCard(){
    //get the HTML div to display cards
    const DIV = document.getElementById("pets")
    let card="";
    //travel the array (for loop)
for(let i=0;i<petSalon.pets.length;i++){
    let pet=petSalon.pet[i];
    card+=`
    <div class="pet">
        <p>${pet.name}</p>
    </div>
    `;
}
        //HTML template for the cards
    
    //Insert the card inot the HTML div
    DIV.innerHTML= card;
}

function displayRow(){

}