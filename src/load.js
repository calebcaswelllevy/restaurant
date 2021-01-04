"use strict";
exports.__esModule = true;
exports.makeNavBar = exports.makeFooter = exports.Home = void 0;
var gallery_1 = require("./gallery");
var about_1 = require("./about");
var order_1 = require("./order");
function Home() {
    console.log("this is getting through");
    var content = document.getElementById("content");
    content.innerHTML = "";
    var mainContent = document.createElement("div");
    makeNavBar();
    //flesh out mainContent:
    var makeBody = (function () {
        var titleHolder = document.createElement('div');
        var title = document.createElement('h1');
        title.textContent = "El Tarasco Mexican Food";
        title.id = 'title';
        titleHolder.appendChild(title);
        mainContent.appendChild(titleHolder);
        content.appendChild(titleHolder);
        // Add an image
        var imageHolder = document.createElement('div');
        var mainImage = document.createElement('img');
        imageHolder.classList.add('container');
        imageHolder.id = "image-holder";
        mainImage.id = 'main-image';
        mainImage.setAttribute("src", "/images/1.png");
        imageHolder.appendChild(mainImage);
        content.appendChild(imageHolder);
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
    footer.innerHTML = '<ul><li><a href="">First thing</a></li><li><a href="">Second Thing</a></li><li><a href="">Third Thing</a></li></ul>';
    footer.id = "footer";
    content.appendChild(footer);
}
exports.makeFooter = makeFooter;
//build the nav bar
function makeNavBar() {
    var content = document.getElementById("content");
    var navBar = document.createElement("ul");
    var tabs = ["Home", "Menu", "Order", "About"];
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
    navBar.classList.add("navbar");
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
