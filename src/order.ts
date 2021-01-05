import { makeFooter, makeNavBar } from './load.js';
export function Order() {

    //represent menu as array of dish objects:
    interface Dish {
        name: string,
        alias:string
        price: number,
    }

    let jrDeluxe:Dish = {
        name: 'Jr. Super Deluxe Burrito',
        alias:'jrDeluxe',
        price: 5,
    } 
    let taco:Dish = {
        name: 'Asada Tacos',
        alias: 'taco',
        price: 4,
    }
    let relleno:Dish = {
        name:'Chiles Rellenos',
        alias: 'relleno',
        price: 6,
    }

    let menu:Dish[] = [jrDeluxe, taco, relleno];

    //clear the page
    let mainContent:HTMLElement = document.getElementById('content');
    mainContent.innerHTML = "";

    //draw the navBar and content
    makeNavBar();
    let content:HTMLElement = document.getElementById('content');
    let title: HTMLElement = document.createElement('h1');
    title.textContent = 'Order';
    
    mainContent.appendChild(title);
    
    //Add menu selections to display
    menu.forEach((dish) => {
        makeItem(dish);
    })
    

    makeFooter();

    

    function makeItem(dish:Dish) {
        //make all the pieces of HTML
        
        let body = document.getElementById('content');
        let item:HTMLElement = document.createElement('div');
        let image:HTMLElement = document.createElement('img');
        let text:HTMLElement = document.createElement('div');
        let counter:HTMLElement = makeCounter(dish);

        //Add content to elements
        
        text.textContent = `${dish.name} - $${dish.price}.00`;
        image.setAttribute('alt', `A photo of ${dish.name}`);
        image.setAttribute('src', `/images/${dish.alias}.png`)

        //Add dish HTML elements to display
        item.appendChild(image);
        item.appendChild(text);
        item.appendChild(counter);
        body.appendChild(item);
        
    }
    function makeCounter(dish:Dish){

        //Make all the pieces:
        let counter:HTMLElement = document.createElement('div');
        let sub:HTMLElement = document.createElement('button');
        let count:HTMLElement = document.createElement('div');
        let add:HTMLElement = document.createElement('button');
        
        //add text
        let orderNumber:number = 0;
        count.textContent = orderNumber.toString();
        sub.textContent = '-';
        add.textContent = '+';

        //Add event listeners to change order number:
        sub.addEventListener('click', () => {
            orderNumber--;
            count.textContent = orderNumber.toString(); 
        });

        add.addEventListener('click', () => { 
            orderNumber++;
            count.textContent = orderNumber.toString(); 
        })

        //Put it all together and return it:
        counter.appendChild(sub);
        counter.appendChild(count);
        counter.appendChild(add);
        
        return counter;
    }
}

