"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var load_js_1 = require("./load.js");
function Menu() {
    var mainContent = document.getElementById('content');
    mainContent.innerHTML = "";
    //draw navbar
    load_js_1.makeNavBar();
    var active = "Menu";
    load_js_1.boldActive(active);
    //get the body ready
    var body = document.createElement('body');
    body.classList.add("container");
    var title = document.createElement('h1');
    //Add images of the menu:
    var menuFront = document.createElement('img');
    menuFront.setAttribute('src', '/images/Menufront.jpg');
    menuFront.setAttribute('alt', 'An image of the front of the menu');
    menuFront.classList.add('menu');
    var menuBack = document.createElement('img');
    menuBack.setAttribute('src', '/images/menuBack.jpg');
    menuBack.setAttribute('alt', 'An image of the back of the menu');
    menuBack.classList.add('menu');
    //Add it to the DOM
    title.textContent = 'Menu';
    body.appendChild(title);
    body.appendChild(menuFront);
    body.appendChild(menuBack);
    mainContent.appendChild(body);
    load_js_1.makeFooter();
}
exports.Menu = Menu;
