import { makeNavBar, makeFooter, boldActive } from './load.js'

export function Menu() {
    let mainContent:HTMLElement = document.getElementById('content');
    mainContent.innerHTML = "";

    //draw navbar
    makeNavBar();
    let active = "Menu";
    boldActive(active);

    //get the body ready
    let body = document.createElement('body');
    body.classList.add("container");
    let title: HTMLElement = document.createElement('h1');

    //Add images of the menu:
    let menuFront:HTMLElement = document.createElement('img');
    menuFront.setAttribute('src', '/images/Menufront.jpg');
    menuFront.setAttribute('alt', 'An image of the front of the menu')
    menuFront.classList.add('menu');
    let menuBack:HTMLElement = document.createElement('img');
    menuBack.setAttribute('src', '/images/menuBack.jpg');
    menuBack.setAttribute('alt', 'An image of the back of the menu')
    menuBack.classList.add('menu');

    //Add it to the DOM
    title.textContent = 'Menu';
    body.appendChild(title);
    body.appendChild(menuFront);
    body.appendChild(menuBack);
    mainContent.appendChild(body);
    makeFooter();
}