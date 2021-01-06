
import { Menu } from './gallery';
import { About } from './about';
import { Order } from './order';


export function Home() {
    
    let content:HTMLElement = document.getElementById("content");
    content.innerHTML = "";
    
    let mainContent:HTMLElement = document.createElement("div");

    makeNavBar();
    let active = "Home";
    boldActive(active);


    //flesh out mainContent:
    let makeBody = (function(){
    let titleHolder:HTMLElement = document.createElement('div');
    let title:HTMLElement = document.createElement('h1');
    title.textContent = "";
    title.id = 'title';
    titleHolder.appendChild(title);
    mainContent.appendChild(titleHolder);
    content.appendChild(titleHolder);

    // Add an image
    let imageHolder:HTMLElement = document.createElement('div');
    let mainImage:HTMLElement = document.createElement('img');
    mainImage.classList.add('main-image');
    mainImage.id = 'main-image';
    mainImage.setAttribute("src", "/images/main.png");
    
    content.appendChild(mainImage);
    // Add some text
    })()

    // add the footer below the main content:
    makeFooter();
}

//build the footer:
export function makeFooter() {
    let content:HTMLElement = document.getElementById("content");
    let footer:HTMLElement = document.createElement('div');
    footer.innerHTML = '<a href="www.calebcaswelllevy.gitub.io">Website developed by Caleb Caswell-Levy</a>';
    footer.id = "footer";
    content.appendChild(footer);
}

//build the nav bar
export function makeNavBar() {
    let content:HTMLElement = document.getElementById("content");
    let navBar:HTMLElement = document.createElement("ul");
    let tabs: string[] = ["Home", "Menu", "Order", "About"];
    navBar.id = 'navBar';
    navBar.classList.add('container');

    //Add image to navBar
    let image:HTMLElement = document.createElement("img");
    image.setAttribute('src', 'images/header.png');
    image.setAttribute('alt', 'El Tarasco Logo');
    image.id = 'logo';
    navBar.appendChild(image);

    //add elements to NavBar:
    for (let i = 0; i<4; i++) {
        let listElement:HTMLElement = document.createElement("li");
        let link:HTMLElement = document.createElement("a");
        link.id = `link-${i}`;
        link.classList.add('link');
        link.textContent = tabs[i];
        listElement.classList.add('link-holder');
        listElement.appendChild(link);
        navBar.appendChild(listElement);
    }

   // Add navbar to document
    content.appendChild(navBar);

 //add event listeners to nav bar elements:
    let home:HTMLElement = document.getElementById('link-0');
    let menu:HTMLElement = document.getElementById('link-1');
    let order:HTMLElement = document.getElementById('link-2');
    let about:HTMLElement = document.getElementById('link-3');
    home.addEventListener('click', Home);
    menu.addEventListener('click', Menu);
    order.addEventListener('click', Order);
    about.addEventListener('click', About);

}

export function boldActive(active) {
    let navbar = document.getElementById('navBar');

    for (let i = 1; i< 5; i++) {

        if (navbar.childNodes[i].childNodes[0].textContent === active) { 
   
            navbar.childNodes[i].childNodes[0].classList.add('active');
        } else {
            navbar.childNodes[i].childNodes[0].classList.remove('active');
        }
    }
}