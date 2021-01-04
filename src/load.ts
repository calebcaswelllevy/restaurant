
import { Menu } from './gallery';
import { About } from './about';
import { Order } from './order';


export function Home() {
    console.log("this is getting through")
    let content:HTMLElement = document.getElementById("content");
    content.innerHTML = "";
    
    let mainContent:HTMLElement = document.createElement("div");

    makeNavBar();
    

    //flesh out mainContent:
    let makeBody = (function(){
    let titleHolder:HTMLElement = document.createElement('div');
    let title:HTMLElement = document.createElement('h1');
    title.textContent = "El Tarasco Mexican Food";
    title.id = 'title';
    titleHolder.appendChild(title);
    mainContent.appendChild(titleHolder);
    content.appendChild(titleHolder);
    // Add an image
    let imageHolder:HTMLElement = document.createElement('div');
    let mainImage:HTMLElement = document.createElement('img');
    imageHolder.classList.add('container');
    imageHolder.id = "image-holder";
    mainImage.id = 'main-image';
    mainImage.setAttribute("src", "/images/1.png");
    imageHolder.appendChild(mainImage);
    content.appendChild(imageHolder);
    // Add some text
    })()

    // add the footer below the main content:
    makeFooter();
}

//build the footer:
export function makeFooter() {
    let content:HTMLElement = document.getElementById("content");
    let footer:HTMLElement = document.createElement('div');
    footer.innerHTML = '<ul><li><a href="">First thing</a></li><li><a href="">Second Thing</a></li><li><a href="">Third Thing</a></li></ul>';
    footer.id = "footer";
    content.appendChild(footer);
}

//build the nav bar
export function makeNavBar() {
    let content:HTMLElement = document.getElementById("content");
    let navBar:HTMLElement = document.createElement("ul");
    let tabs: string[] = ["Home", "Menu", "Order", "About"];

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
    navBar.classList.add("navbar");
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