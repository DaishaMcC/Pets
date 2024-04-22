let petSalon = {

    //Address of pets
    name: "the fashion pet",
    phone: "999-999-9999",
    address: {
        country: "USA",
        city: "San Francisco",
        ZipCode: "12345",
    },
    pets:[]

}

//constructor (blueprint)
function Pet(name,age,gender,service,breed){
//attributes on left parameter on the right
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.breed=breed;
    this.action=action;
}
function isValid(pet){
    let validation=true; // we are fine
    if(pet.name==""){    
    validation=false
    alert("Please add a name");
    }
    if(pet.service==""){
        validation=false
        alert("Please add a service");
    }
    return validation;  //returning the result of the validation
}
function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputAction = document.getElementById("txtAction").value;

    let newPet = new Pet(inputName,inputAge,inputGender,inputService,inputBreed,inputAction);
    console.log(newPet);

    if(isValid(newPet)==true){
        petSalon.pets.push(newPet);
        //displayCard();
        displayCard();
        displayServiceCount();
        console.log(petSalon.pets);//displaying the pets array
    }
}

function deletePet(petId){
    console.log("Deleting pet ..." + petId);
    document.getElementById(petId).remove();
    petSalon.pets.splice(petId, 1);
    displayRow();
    displayServiceCount();
}

function init(){
    let pet1 = new Pet("Scooby",99,"Male","Grooming","Dog","Credit");
    let pet2 = new Pet("Scrappy",79,"Male","Vaccines","Dog","Debit");
    petSalon.pets.push(pet1,pet2);
    let pet3 = new Pet("Test",99,"Male","Grooming","Dog","Credit");
    let pet4 = new Pet("Test 2",79,"Male","Nails","Dog","Debit");
    petSalon.pets.push(pet1,pet2,pet3,pet4);

    //displayCard();
    displayRow();
    displayServiceCount();
}

window.onload=init; //wait to render the HTML then load the init
// var fahrenheitTemperature = document.getElementById("salon")
// fahrenheitTemperature.innerHTML +=

// <div id="weather"></div>

//function getSum(){
//    let pet = 0;
//    for(let i = 0;i<2;i++)
//    {
//        pet=pet+pet[i].name;
//    }
//    console.log(pets);
//}
//getSum();