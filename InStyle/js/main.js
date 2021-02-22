/* Declaration of modals */

var loadInScreen = document.getElementById("load-in");
var loginScreen = document.getElementById("login");
var homeScreen = document.getElementById("home-screen");

var headerLogo = document.getElementById("header-logo")


// Load In
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

}, 3000) // time in millisecond for as long as you like


function login() {
    var username = document.getElementById("login-username");
    console.log(username.value);
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
