/* Declaration of modals */

var loadInScreen = document.getElementById("load-in");
var loginScreen = document.getElementById("login");
var homeScreen = document.getElementById("home-screen");
var search = document.getElementById("search");

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



/* Login */
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






/* Removes currently active section class from current */
function removeActive() {
    var currentActive = document.querySelector(".active-section");

    console.log(currentActive);
    
    currentActive.classList.remove("active-section");
}




/* Returns user to homescreen */
function goToHome() {
    
    removeActive();
    
    homeScreen.classList.add("active-section");
    
}

function goToSearch() {
    
    removeActive();
    
    search.classList.add("active-section");
    
}


/* 

div.classList.remove("X");
div.classList.add("X");

*/
