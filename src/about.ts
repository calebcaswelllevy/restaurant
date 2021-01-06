import { makeNavBar, makeFooter, boldActive } from './load.js'

export function About() {
    
    
 
    let mainContent:HTMLElement = document.getElementById('content');
    mainContent.innerHTML = "";

    //create the navBar
    makeNavBar();
    let active = "About";
    boldActive(active);

    //Get the body ready to go
    let body = document.createElement('body');
    let title: HTMLElement = document.createElement('h1');
    let description: HTMLElement = document.createElement('div');
    let image: HTMLElement = document.createElement('img');
    image.id = 'about-image';
    description.id = 'description';
    description.textContent = ('El Tarasco is a South Bay classic that has been serving up Michoacán style Mexican food since 1965. Lots of things have changed in Manhattan Beach since then, but Tarasco is holding down the fort. This page is a tribute to my favorite Mexican place since I was a kid. I recommend the Jr. Super Deluxe with red and green mole.')
    title.textContent = 'About';
    image.setAttribute('src', '/images/storefront.png');
    body.appendChild(title);
    body.appendChild(description);
    body.appendChild(image);
    mainContent.appendChild(body);
    makeFooter();
   
}