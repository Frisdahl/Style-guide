/* Declaration of modals */

var loadInScreen = document.getElementById("load-in");
var loginScreen = document.getElementById("login");
var homeScreen = document.getElementById("home-screen");
var search = document.getElementById("search");
var dateSelect = document.getElementById("date-select");
var timeSelect = document.getElementById("time-select");
var payment = document.getElementById("payment");



var customer1 = document.getElementById("customer1");
var customer2 = document.getElementById("customer2");
var customer3 = document.getElementById("customer3");
var customer4 = document.getElementById("customer4");
var customer5 = document.getElementById("customer5");
var customer6 = document.getElementById("customer6");
var customer7 = document.getElementById("customer7");
var customer8 = document.getElementById("customer8");

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

    // Tjek om input er udfyldt

    var username = document.getElementById("login-username").value;
    var insertName = document.getElementById("welcome-name");

    loginScreen.classList.remove("active-section");
    homeScreen.classList.add("active-section");

    insertName.innerHTML = username;


}



function test() {
    console.log("test");
}






/* Removes currently active section class from current */
function removeActive() {
    var currentActive = document.querySelector(".active-section");
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



function goToCustomer1() {
    removeActive();
    customer1.classList.add("active-section");
}



function goToDateSelect() {
    //Tjek om input er udfyldt
    removeActive();
    dateSelect.classList.add("active-section");

    var selectedService = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
        selectedService.push(checkboxes[i].name)
        selectedService.push(checkboxes[i].value)
    }
    console.log(selectedService);
}



/* Calendar Script */

let myCalendar = new VanillaCalendar({
    selector: "#myCalendar",
    pastDates: false,
    months: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
    shortWeekday: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
    onSelect: (data, elem) => {},
});





function goToTimeSelect() {
    removeActive();
    timeSelect.classList.add("active-section");
    
    var calendar = document.getElementById("myCalendar");
    var activeCalendarDate = document.querySelector(".vanilla-calendar-date--selected");
    
    console.log(activeCalendarDate.dataset.calendarDate)
    
}

function goToPayment() {
    removeActive();
    payment.classList.add("active-section");
}



















