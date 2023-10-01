import './style.css';
import backImage from './img/main_background.jpg';
import { loadMenu } from './menu.js';



//Background image
const body = document.querySelector('body');
const backgroundImage = new Image();
backgroundImage.src = backImage;

function addBackground() {
    const background = document.createElement('div');
    background.classList.add('content');
    //background.appendChild(backgroundImage);
    return background;
}

body.appendChild(addBackground());


//Nav
function addNav() {
    const nav = document.createElement('div');
    nav.classList.add('nav');
    return nav;
}

function addTitle() {
    const title = document.createElement('h1');
    title.textContent = 'The Odin Trattoria';
    return title;
}

function addNavList() {
    const list = document.createElement('ul');
    list.classList.add('nav-list');
    return list;
}

const content = document.querySelector('.content');
content.appendChild(addNav());
const nav = document.querySelector('.nav');
nav.appendChild(addTitle());
nav.appendChild(addNavList());

//Nav options
function addNavOption(text, link, id) {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.textContent = text;
    anchor.id = id;
    listItem.appendChild(anchor);
    return listItem;
}

const menuOptions = [
    { text: 'Main', link: '#', id: 'main-link' },
    { text: 'Menu', link: '#', id: 'menu-link' },
    { text: 'Contact', link: '#', id: 'contact-link' },
];

const navList = document.querySelector('.nav-list');

menuOptions.forEach((option) => {
    navList.appendChild(addNavOption(option.text, option.link, option.id));
});

//Menu


const menuLink = document.getElementById('menu-link');
menuLink.addEventListener('click', loadMenu);
const mainLink = document.getElementById('main-link');
mainLink.addEventListener('click', () => {
  const menuSection = document.querySelector('.menu');
  if (menuSection) {
    menuSection.remove();
  }
});











