"use strict";
exports.__esModule = true;
exports.Order = void 0;
var load_js_1 = require("./load.js");
function Order() {
    var mainContent = document.getElementById('content');
    mainContent.innerHTML = "";
    load_js_1.makeNavBar();
    var body = document.createElement('body');
    var title = document.createElement('h1');
    title.textContent = 'Order';
    body.appendChild(title);
    mainContent.appendChild(body);
    load_js_1.makeFooter();
}
exports.Order = Order;
