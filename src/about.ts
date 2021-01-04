import { makeNavBar, makeFooter } from './load.js'

export function About() {
    
    
 
    let mainContent:HTMLElement = document.getElementById('content');
    mainContent.innerHTML = "";

    makeNavBar();
    let body = document.createElement('body');
    let title: HTMLElement = document.createElement('h1');
    let description: HTMLElement = document.createElement('div');
    let image: HTMLElement = document.createElement('img');
    description.textContent = ('A South Bay classic that has been serving up Michoacán style mexican food since 1965.')
    title.textContent = 'About';
    image.setAttribute('src', '/images/storefront.png');
    body.appendChild(title);
    body.appendChild(description);
    body.appendChild(image);
    mainContent.appendChild(body);
    makeFooter();
   
}