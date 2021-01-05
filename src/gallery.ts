import { makeNavBar, makeFooter } from './load.js'

export function Menu() {
    let mainContent:HTMLElement = document.getElementById('content');
    mainContent.innerHTML = "";

    makeNavBar();
    let body = document.createElement('body');
    let title: HTMLElement = document.createElement('h1');
    let menu:HTMLElement = document.createElement('img');
    menu.setAttribute('src', 'https://d2by9dx2k0n1tg.cloudfront.net/menus/8/8279/public.jpg?1302053562');
    title.textContent = 'Menu';
    body.appendChild(title);
    body.appendChild(menu);
    mainContent.appendChild(body);
    makeFooter();
}