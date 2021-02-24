/* Declaration of modals */

var loadInScreen = document.getElementById("load-in");
var loginScreen = document.getElementById("login");
var homeScreen = document.getElementById("home-screen");
var search = document.getElementById("search");
var dateSelect = document.getElementById("date-select");
var timeSelect = document.getElementById("time-select");
var orderConfirmed = document.getElementById("order-confirmed");
var orderReceipt = document.getElementById("order-receipt");



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

    // 01 Tjek om brugeren er oprettet

    var usernameInput = document.getElementById("login-number").value;

    var phoneNumber = ["42739363", "30226528", "27730350", "50961120", "23274912"];
    var fullname = ["Alexander", "Julius", "Lauge", "Freja", "Tobias"];

    if (phoneNumber.includes(usernameInput)) {

        console.log("welcome");

        // Tjek hvad index nr. indtastet tlf nr. er
        // console.log(phoneNumber.indexOf(usernameInput));

        var phoneIndex = phoneNumber.indexOf(usernameInput);
        var username = fullname[phoneIndex];

        // Udskriv brugerens navn á samme indexsering som poneNumber
        // console.log(fullname[phoneIndex]);

        // 02 Skift sektion hvis success

        var insertName = document.getElementById("welcome-name");

        loginScreen.classList.remove("active-section");
        homeScreen.classList.add("active-section");

        insertName.innerHTML = username;

    } else {

        // 03 Error status

        console.log("wrong");

    }









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

    selectedService = []
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




var activeCalendarDate = "";

function goToTimeSelect() {
    removeActive();
    timeSelect.classList.add("active-section");

    var calendar = document.getElementById("myCalendar");
    activeCalendarDate = document.querySelector(".vanilla-calendar-date--selected");

    console.log(activeCalendarDate.dataset.calendarDate);

}

var selectedTime = "";

function goToConfirmed() {

    removeActive();
    orderConfirmed.classList.add("active-section");

    selectedTime = document.querySelector('#time-select input[type=radio]:checked')

    var asd = orderConfirmed.querySelector(".confirmed-order-container");

    console.log(selectedTime.value)

    setTimeout(function () {

        asd.classList.add("fadeout");

        setTimeout(function () {
            removeActive();
            orderReceipt.classList.add("active-section");
        }, 200)

    }, 2000);


    var totalPricePrint = document.getElementById("receipt-footer-price");


    // Print date and time into reciept

    var datePrint = document.getElementById("date-print");
    var timePrint = document.getElementById("time-print");
    

    function getSnippet(text, length) {
        var rx = new RegExp("^.{" + length + "}[^ ]*");
        return rx.exec(text)[0];
    }
    console.log(getSnippet(activeCalendarDate.dataset.calendarDate, 9)); // get


    datePrint.innerHTML = getSnippet(activeCalendarDate.dataset.calendarDate, 9) + " Kl. " + selectedTime.value;


    // Sorts prices from services
    var serviceSorted = [];
    var priceSorted = [];
    for (var i = 0; i < selectedService.length; i += 2) {
        serviceSorted.push(selectedService[i]);
        selectedService[i + 1] && priceSorted.push(selectedService[i + 1]);
    }

    var priceSortedInt = parseInt(priceSorted);


    // Laves om til loop, der automatisk tilføjer ny row
    // Prints prices into reciept


    var priceList = document.getElementById("receipt-pricelist");

    for (var i = 0; i < serviceSorted.length; i++) {

        var servicePrintIndex = document.getElementById("service-print" + i + 1);
        var servicePricePrintIndex = document.getElementById("service-price-print" + i + 1);

        priceList.innerHTML += "<div class='receipt-row'><p id='service-print1'>" + serviceSorted[i] + "<p id='service-price-print1'>" + priceSorted[i] + ",00 DKK</div>"

    }






    // Converts strings to integer
    var result = priceSorted.map(function (x) {
        return parseInt(x, 10);
    });


    // Calculate total price and insert into reciept
    totalPricePrint.innerHTML = result.reduce((a, b) => a + b, 0) + ",00 DKK";





}

// Brug til dato for at forkorte dag, måned dato
function getSnippet(text, length) {
    var rx = new RegExp("^.{" + length + "}[^ ]*");
    return rx.exec(text)[0];
}
console.log(getSnippet("get snippet text using javascript?", 1)); // get
console.log(getSnippet("get snippet text using javascript?", 3)); // get
console.log(getSnippet("get snippet text using javascript?", 10)); // get snippet
console.log(getSnippet("get snippet text using javascript?", 11)); // get snippet


function recieptPrinter() {

}
