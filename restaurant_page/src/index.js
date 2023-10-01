import './style.css';
import backImage from './img/main_background.jpg';


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
function addNavOption(text, link) {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.textContent = text;
    listItem.appendChild(anchor);
    return listItem;
}

const menuOptions = [
    { text: 'Main', link: '#' },
    { text: 'Menu', link: '#' },
    { text: 'Contact', link: '#' },
];

const navList = document.querySelector('.nav-list');

menuOptions.forEach((option) => {
    navList.appendChild(addNavOption(option.text, option.link));
});











