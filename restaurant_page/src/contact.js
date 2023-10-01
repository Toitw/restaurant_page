import  './style.css';

export function loadContact() {
    const contactSection = document.createElement('section');
    contactSection.classList.add('contact');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    contactSection.appendChild(contactContainer);

    const title = document.createElement('h2');
    title.textContent = 'Contact Us';
    contactContainer.appendChild(title);

    const address = document.createElement('p');
    address.textContent = '123 Main St, New York, NY 10030';
    contactContainer.appendChild(address);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: 123-456-7890';
    contactContainer.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'Email:';
    contactContainer.appendChild(email);

    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:';
    emailLink.textContent = 'dfdf';
    email.appendChild(emailLink);

    const content = document.querySelector('.content');
    if (content.childNodes.length > 1) {
        content.removeChild(content.childNodes[1]);
    }
    content.appendChild(contactSection);
}
