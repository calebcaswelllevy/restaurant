import { makeNavBar, makeFooter } from './load.js'

export function Menu() {
    let mainContent:HTMLElement = document.getElementById('content');
    mainContent.innerHTML = "";

    makeNavBar();
    let body = document.createElement('body');
    let title: HTMLElement = document.createElement('h1');
    title.textContent = 'Gallery';
    body.appendChild(title);
    mainContent.appendChild(body);
    makeFooter();
}