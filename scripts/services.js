let services=[];

//

// costructor
function Pet(service,action){
    this.service=service;
    this.action=action;
}

function isValid(pet){
    let validation=true; // we are fine
    if(pet.service==""){    
    validation=false
    alert("Please add service","error");
    }
    if(pet.action==""){
        validation=false
        alert("Please add...","error");
    }
    return validation;  //returning the result of the validation
}

// register function
function register(){
    let inputService = document.getElementById("txtService").value;
    let inputAction = document.getElementById("txtAction").value;
}

// use notification
function showNotification(){
    $("#Notification").show();
}