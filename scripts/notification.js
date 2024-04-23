function showNotification(msg,style){
    $("#notification").show();
    $("#notificationTest").text(msg);
    $("#notification").addClass(style);
    setTimeout(hideNotification,3000);
}

function hideNotification(){
    $("#notification").hide();
}

//use the function under"
// registration
// delete