import  './style.css';
import calamari from './img/calamari.jpg';
import pizza from './img/pizza1.jpg';
import tosta from './img/tosta.jpg';
import macarroni from './img/macarroni.jpg';

const calamaripic = new Image();
calamaripic.src = calamari;
const pizzapic = new Image();
pizzapic.src = pizza;
const tostapic = new Image();
tostapic.src = tosta;
const macarronipic = new Image();
macarronipic.src = macarroni;


export function loadMenu() {
    const menuItems = [
        {
            name: 'Calamari',
            image: calamari,
            price: '$10',
        },
        {
            name: 'Pizza',
            image: pizza,
            price: '$12',
        },
        {
            name: 'Tosta',
            image: tosta,
            price: '$8',
        },
        {
            name: 'Macarroni',
            image: macarroni,
            price: '$9',
        },
        ];
  
    const menuSection = document.createElement('section');
    menuSection.classList.add('menu');
  
    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items');
    menuSection.appendChild(menuItemsContainer);
  
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
  
      const image = document.createElement('img');
      image.src = menuItems[i].image;
      image.alt = menuItems[i].name;
      menuItem.appendChild(image);
  
      const name = document.createElement('h3');
      name.textContent = menuItems[i].name;
      menuItem.appendChild(name);
  
      const price = document.createElement('p');
      price.textContent = menuItems[i].price;
      menuItem.appendChild(price);
  
      menuItemsContainer.appendChild(menuItem);
    }
  
    const content = document.querySelector('.content');
    content.appendChild(menuSection);
}