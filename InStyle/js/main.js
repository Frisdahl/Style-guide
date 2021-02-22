/* Declaration of modals */

var loadInScreen = document.getElementById("load-in");
var loginScreen = document.getElementById("login");
var homeScreen = document.getElementById("home-screen");

var headerLogo = document.getElementById("header-logo")


// Load In Fade
setTimeout(function () {

    loadInScreen.classList.add("fadeout");
    

    setTimeout(function () {
        
        headerLogo.classList.remove("invisible");

        loadInScreen.classList.remove("active-section");
        loginScreen.classList.add("active-section");
        

        setTimeout(function () {
            
            headerLogo.classList.add("fadein");
            loginScreen.classList.add("fadein");
            
        }, 200)

    }, 200)

}, 500) // time in millisecond for as long as you like

/* Delay tilrettes til sidst */


function login() {
    
    var username = document.getElementById("login-username").value;
    var insertName = document.getElementById("welcome-name")
    
    console.log(username.value);
    
    loginScreen.classList.remove("active-section");
    homeScreen.classList.add("active-section");
    
    insertName.innerHTML= username;
    
    
}



function test() {
    console.log("test")
}





function goToHome() {

    console.log(this);
    var parentOfButton = this.parentElement.nodeName;
    
    console.log(parentOfButton);

}


/* 

div.classList.remove("X");
div.classList.add("X");

*/
