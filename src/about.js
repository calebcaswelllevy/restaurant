"use strict";
exports.__esModule = true;
exports.About = void 0;
var load_js_1 = require("./load.js");
function About() {
    var mainContent = document.getElementById('content');
    mainContent.innerHTML = "";
    load_js_1.makeNavBar();
    var body = document.createElement('body');
    var title = document.createElement('h1');
    var description = document.createElement('div');
    var image = document.createElement('img');
    description.textContent = ('A South Bay classic that has been serving up Michoacán style mexican food since 1965.');
    title.textContent = 'About';
    image.setAttribute('src', '/images/storefront.png');
    body.appendChild(title);
    body.appendChild(description);
    body.appendChild(image);
    mainContent.appendChild(body);
    load_js_1.makeFooter();
}
exports.About = About;
