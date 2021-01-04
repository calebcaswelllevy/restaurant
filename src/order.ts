import { makeFooter, makeNavBar } from './load.js';
export function Order() {
    let mainContent:HTMLElement = document.getElementById('content');
    mainContent.innerHTML = "";

    makeNavBar();
    let body = document.createElement('body');
    let title: HTMLElement = document.createElement('h1');
    title.textContent = 'Order';
    body.appendChild(title);
    mainContent.appendChild(body);
    makeFooter();
}