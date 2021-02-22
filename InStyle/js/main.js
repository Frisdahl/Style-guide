/* Declaration of modals */

var loadInScreen = document.getElementById("load-in");
var loginScreen = document.getElementById("login");
var homeScreen = document.getElementById("home-screen");


// Load In
setTimeout(function(){
    loadInScreen.classList.remove("active-section")
    loginScreen.classList.add("active-section")
}, 3000) // time in millisecond for as long as you like



/* 

div.classList.remove("X");
div.classList.add("X");

*/