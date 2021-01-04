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
    title.textContent = 'Gallery';
    body.appendChild(title);
    mainContent.appendChild(body);
    load_js_1.makeFooter();
}
exports.Menu = Menu;
