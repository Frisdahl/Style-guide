/* Declaration of modals */

var loadInScreen = document.getElementById("load-in");
var loginScreen = document.getElementById("login");
var homeScreen = document.getElementById("home-screen");
var search = document.getElementById("search");
var dateSelect = document.getElementById("date-select");
var timeSelect = document.getElementById("time-select");
var orderConfirmed = document.getElementById("order-confirmed");
var orderReceipt = document.getElementById("order-receipt");
var profileScreen = document.getElementById("profile-page");
var SignUpCountry = document.getElementById("signup-country");
var SignUpVerification = document.getElementById("signup-verification");
var SignUpName = document.getElementById("signup-name");
var SignUpDone = document.getElementById("signup-done");
var myAppointments = document.getElementById("my-appointments");
var giftcards = document.getElementById("giftcards");
var myPoints = document.getElementById("my-points");
var FAQ = document.getElementById("faq");
var paymentMethods = document.getElementById("betalings-metoder");



var customer1 = document.getElementById("customer1");
var customer2 = document.getElementById("customer2");
var customer3 = document.getElementById("customer3");
var customer4 = document.getElementById("customer4");
var customer5 = document.getElementById("customer5");
var customer6 = document.getElementById("customer6");
var customer7 = document.getElementById("customer7");
var customer8 = document.getElementById("customer8");

var headerLogo = document.getElementById("header-logo");


// Insert name homescreen
var insertNameHome = document.getElementById("welcome-name");


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

        loginScreen.classList.remove("active-section");
        homeScreen.classList.add("active-section");

        insertNameHome.innerHTML = username;

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
    window.scrollTo(0,0);
    headerLogo.src ="img/logo.png";
}



function goToLogIn() {
    window.scrollTo(0,0);
    location.reload();
}

/* Returns user to homescreen */
function goToHome() {
    removeActive();
    homeScreen.classList.add("active-section");
}

function goToProfile() {
    removeActive();
    profileScreen.classList.add("active-section");
}


function goToSearch() {
    removeActive();
    search.classList.add("active-section");
}

function goToMyAppointments() {
    removeActive();
    myAppointments.classList.add("active-section");
}

function goToGiftcards() {
    removeActive();
    giftcards.classList.add("active-section");
}

function goToPoints() {
    removeActive();
    myPoints.classList.add("active-section");
}



function goToCustomer1() {
    removeActive();
    customer1.classList.add("active-section");
}

function goToSignUpCountry() {
    removeActive();
    SignUpCountry.classList.add("active-section");
}

function goToSignUpVerification() {
    removeActive();
    SignUpVerification.classList.add("active-section");
    
    var verificationInputs = document.querySelectorAll("#signup-verification input");
    console.log(verificationInputs);
    verificationInputs[0].focus();
}

function goToSignUpName() {
    removeActive();
    SignUpName.classList.add("active-section");
}

function goToSignUpDone() {
    var username = document.getElementById("signUpUsername").value;
    var userLastname = document.getElementById("signUpLastname").value;
    var signUpDoneUsernamePrint = document.getElementById("signUpPrintUsername");
    var profilePageUsername = document.getElementById("profile-name");
    
    insertNameHome.innerHTML = username;
    signUpDoneUsernamePrint.innerHTML = username;
    profilePageUsername.innerHTML = username + " " + userLastname;
    
    removeActive();
    SignUpDone.classList.add("active-section");
}


function goToFAQ() {
    removeActive();
    FAQ.classList.add("active-section");
}

function goToPaymentMethods() {
    removeActive();
    paymentMethods.classList.add("active-section");
}






/* Emulering af TAB - kan forbedres, skal forbedres - burde laves med en loop i stedet */

var verificationProcess = document.getElementById("verification-process");



function emulateTab1() {
    var verificationInputs = document.querySelectorAll("#signup-verification input");
    verificationInputs[1].focus();
    verificationInputs[0].classList.add("filled-input");
    
    verificationProcess.style.width = '58px';
    
}

function emulateTab2() {
    var verificationInputs = document.querySelectorAll("#signup-verification input");
    verificationInputs[2].focus();
    verificationInputs[1].classList.add("filled-input");
    
    verificationProcess.style.width = '116px';
}

function emulateTab3() {
    var verificationInputs = document.querySelectorAll("#signup-verification input");
    verificationInputs[3].focus();
    verificationInputs[2].classList.add("filled-input");
    
    verificationProcess.style.width = '174px';
}

function emulateTab4() {
    var verificationInputs = document.querySelectorAll("#signup-verification input");
    verificationInputs[3].classList.add("filled-input");
    
    goToSignUpName();
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
    onSelect: (data, elem) => {}

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
    headerLogo.src ="img/logo-negativ.png";

    selectedTime = document.querySelector('#time-select input[type=radio]:checked')

    var asd = orderConfirmed.querySelector(".confirmed-order-container");

    console.log(selectedTime.value)

    setTimeout(function () {

        asd.classList.add("fadeout");

        setTimeout(function () {
            removeActive();
            orderReceipt.classList.add("active-section");
            headerLogo.src ="img/logo-negativ.png";
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

    datePrint.innerHTML = getSnippet(activeCalendarDate.dataset.calendarDate, 9) + ", kl. " + selectedTime.value;

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


var cancelPopup = document.getElementById("cancel-popup");
function cancelOrderPopup() {
    cancelPopup.classList.toggle("active");
}

function cancelOrder() {
    cancelPopup.innerHTML = '<div class="cancel-card"><h3>Din tid er nu afbestilt</h3><button class="full-width" onclick="goToHome(); cancelOrderPopup()">Tilbage</button></div>'
}

