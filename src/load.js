"use strict";
exports.__esModule = true;
exports.boldActive = exports.makeNavBar = exports.makeFooter = exports.Home = void 0;
var gallery_1 = require("./gallery");
var about_1 = require("./about");
var order_1 = require("./order");
function Home() {
    var content = document.getElementById("content");
    content.innerHTML = "";
    var mainContent = document.createElement("div");
    makeNavBar();
    var active = "Home";
    boldActive(active);
    //flesh out mainContent:
    var makeBody = (function () {
        var titleHolder = document.createElement('div');
        var title = document.createElement('h1');
        title.textContent = "";
        title.id = 'title';
        titleHolder.appendChild(title);
        mainContent.appendChild(titleHolder);
        content.appendChild(titleHolder);
        // Add an image
        var imageHolder = document.createElement('div');
        var mainImage = document.createElement('img');
        mainImage.classList.add('main-image');
        mainImage.id = 'main-image';
        mainImage.setAttribute("src", "/images/main.png");
        content.appendChild(mainImage);
        // Add some text
    })();
    // add the footer below the main content:
    makeFooter();
}
exports.Home = Home;
//build the footer:
function makeFooter() {
    var content = document.getElementById("content");
    var footer = document.createElement('div');
    footer.innerHTML = '<a href="www.calebcaswelllevy.gitub.io">Website developed by Caleb Caswell-Levy</a>';
    footer.id = "footer";
    content.appendChild(footer);
}
exports.makeFooter = makeFooter;
//build the nav bar
function makeNavBar() {
    var content = document.getElementById("content");
    var navBar = document.createElement("ul");
    var tabs = ["Home", "Menu", "Order", "About"];
    navBar.id = 'navBar';
    navBar.classList.add('container');
    //Add image to navBar
    var image = document.createElement("img");
    image.setAttribute('src', 'images/header.png');
    image.setAttribute('alt', 'El Tarasco Logo');
    image.id = 'logo';
    navBar.appendChild(image);
    //add elements to NavBar:
    for (var i = 0; i < 4; i++) {
        var listElement = document.createElement("li");
        var link = document.createElement("a");
        link.id = "link-" + i;
        link.classList.add('link');
        link.textContent = tabs[i];
        listElement.classList.add('link-holder');
        listElement.appendChild(link);
        navBar.appendChild(listElement);
    }
    // Add navbar to document
    content.appendChild(navBar);
    //add event listeners to nav bar elements:
    var home = document.getElementById('link-0');
    var menu = document.getElementById('link-1');
    var order = document.getElementById('link-2');
    var about = document.getElementById('link-3');
    home.addEventListener('click', Home);
    menu.addEventListener('click', gallery_1.Menu);
    order.addEventListener('click', order_1.Order);
    about.addEventListener('click', about_1.About);
}
exports.makeNavBar = makeNavBar;
function boldActive(active) {
    var navbar = document.getElementById('navBar');
    for (var i = 1; i < 5; i++) {
        if (navbar.childNodes[i].childNodes[0].textContent === active) {
            navbar.childNodes[i].childNodes[0].classList.add('active');
        }
        else {
            navbar.childNodes[i].childNodes[0].classList.remove('active');
        }
    }
}
exports.boldActive = boldActive;
