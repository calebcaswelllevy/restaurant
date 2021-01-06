"use strict";
exports.__esModule = true;
exports.Order = void 0;
var load_js_1 = require("./load.js");
function Order() {
    var jrDeluxe = {
        name: 'Jr. Super Deluxe Burrito',
        alias: 'jrDeluxe',
        price: 5
    };
    var taco = {
        name: 'Asada Tacos',
        alias: 'taco',
        price: 4
    };
    var relleno = {
        name: 'Chiles Rellenos with rice and beans',
        alias: 'relleno',
        price: 6
    };
    var enchilada = {
        name: 'Cheese Enchiladas with rice and beans',
        alias: 'enchilada',
        price: 6
    };
    var menu = [jrDeluxe, taco, relleno, enchilada];
    //clear the page
    var mainContent = document.getElementById('content');
    mainContent.innerHTML = "";
    //draw the navBar and content
    load_js_1.makeNavBar();
    var active = "Order";
    load_js_1.boldActive(active);
    var content = document.getElementById('content');
    var title = document.createElement('h1');
    title.textContent = 'Order';
    mainContent.appendChild(title);
    //Add menu selections to display
    menu.forEach(function (dish) {
        makeItem(dish);
    });
    load_js_1.makeFooter();
    function makeItem(dish) {
        //make all the pieces of HTML
        var body = document.getElementById('content');
        var item = document.createElement('div');
        var image = document.createElement('img');
        var text = document.createElement('div');
        var counter = makeCounter(dish);
        item.classList.add('item', 'container');
        image.classList.add('food-pic');
        text.classList.add('food-text');
        counter.classList.add('counter');
        //Add content to elements
        text.textContent = dish.name + " - $" + dish.price + ".00";
        image.setAttribute('alt', "A photo of " + dish.name);
        image.setAttribute('src', "/images/" + dish.alias + ".png");
        //Add dish HTML elements to display
        item.appendChild(image);
        item.appendChild(text);
        item.appendChild(counter);
        body.appendChild(item);
    }
    function makeCounter(dish) {
        //Make all the pieces:
        var counter = document.createElement('div');
        var sub = document.createElement('button');
        var count = document.createElement('div');
        var add = document.createElement('button');
        //Add classes and IDs:
        counter.classList.add('container', 'counter');
        sub.classList.add('btn', 'count-element');
        add.classList.add('btn', 'count-element');
        count.classList.add('count-element');
        add.id = "add";
        sub.id = "sub";
        count.id = "count";
        //add text
        var orderNumber = 0;
        count.textContent = orderNumber.toString();
        sub.textContent = '-';
        add.textContent = '+';
        //Add event listeners to change order number:
        sub.addEventListener('click', function () {
            orderNumber > 0 ?
                orderNumber-- :
                orderNumber = 0;
            count.textContent = orderNumber.toString();
        });
        add.addEventListener('click', function () {
            orderNumber++;
            count.textContent = orderNumber.toString();
        });
        //Put it all together and return it:
        counter.appendChild(sub);
        counter.appendChild(count);
        counter.appendChild(add);
        return counter;
    }
}
exports.Order = Order;
