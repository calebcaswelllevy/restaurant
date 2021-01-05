"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var load_js_1 = require("./load.js");
function Menu() {
    var mainContent = document.getElementById('content');
    mainContent.innerHTML = "";
    load_js_1.makeNavBar();
    var body = document.createElement('body');
    var title = document.createElement('h1');
    var menu = document.createElement('img');
    menu.setAttribute('src', 'https://d2by9dx2k0n1tg.cloudfront.net/menus/8/8279/public.jpg?1302053562');
    title.textContent = 'Menu';
    body.appendChild(title);
    body.appendChild(menu);
    mainContent.appendChild(body);
    load_js_1.makeFooter();
}
exports.Menu = Menu;
