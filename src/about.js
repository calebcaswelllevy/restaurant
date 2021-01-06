"use strict";
exports.__esModule = true;
exports.About = void 0;
var load_js_1 = require("./load.js");
function About() {
    var mainContent = document.getElementById('content');
    mainContent.innerHTML = "";
    //create the navBar
    load_js_1.makeNavBar();
    var active = "About";
    load_js_1.boldActive(active);
    //Get the body ready to go
    var body = document.createElement('body');
    var title = document.createElement('h1');
    var description = document.createElement('div');
    var image = document.createElement('img');
    image.id = 'about-image';
    description.id = 'description';
    description.textContent = ('El Tarasco is a South Bay classic that has been serving up Michoacán style Mexican food since 1965. Lots of things have changed in Manhattan Beach since then, but Tarasco is holding down the fort. This page is a tribute to my favorite Mexican place since I was a kid. I recommend the Jr. Super Deluxe with red and green mole.');
    title.textContent = 'About';
    image.setAttribute('src', '/images/storefront.png');
    body.appendChild(title);
    body.appendChild(description);
    body.appendChild(image);
    mainContent.appendChild(body);
    load_js_1.makeFooter();
}
exports.About = About;
