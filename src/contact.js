import './style.css'
import openWebsite from './website';
import openHomeTab from './home'
import openMenuTab from './menu'

export default function openContactTab() {
    const content = document.getElementById('content')
    content.classList.remove('content')
    content.classList.add('menu-content')
    //Main 
    const mainSection = document.getElementById('mainSection')
    mainSection.innerHTML = ''
    mainSection.classList.remove('main')
    mainSection.classList.remove('menu-main')
    mainSection.classList.add('contact-main')

    // Create the main container
const infoContainer = document.createElement('div');
infoContainer.classList.add('info-container');

// Create the info section
const info = document.createElement('div');
info.classList.add('info');

// Create the PHONE contact
const phoneContact = document.createElement('div');
phoneContact.classList.add('contact');
phoneContact.textContent = 'PHONE';

const phoneContactText = document.createElement('div');
phoneContactText.classList.add('contact-text');
phoneContactText.textContent = '+381/63812780';

info.appendChild(phoneContact);
info.appendChild(phoneContactText);

// Add line breaks
info.appendChild(document.createElement('br'));
info.appendChild(document.createElement('br'));

// Create the ADDRESS contact
const addressContact = document.createElement('div');
addressContact.classList.add('contact');
addressContact.textContent = 'ADDRESS';

const addressContactText = document.createElement('div');
addressContactText.classList.add('contact-text');
addressContactText.textContent = 'Grantsville, UT 84029';

info.appendChild(addressContact);
info.appendChild(addressContactText);

// Append the info section to the main container
infoContainer.appendChild(info);

// Create the iframe for the map
const mapIframe = document.createElement('iframe');
mapIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96942.70947579166!2d-112.54254737876367!3d40.59768074754504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ad30e06da7fbc3%3A0x7bd639208a838fb4!2sGrantsville%2C%20UT%2084029%2C%20USA!5e0!3m2!1sen!2srs!4v1689519271738!5m2!1sen!2srs';
mapIframe.width = '600';
mapIframe.height = '450';
mapIframe.style.border = '0';
mapIframe.allowFullscreen = true;
mapIframe.loading = 'lazy';
mapIframe.referrerPolicy = 'no-referrer-when-downgrade';
mapIframe.classList.add('map');

// Create a container for the map iframe
const mapContainer = document.createElement('div');
mapContainer.appendChild(mapIframe);

// Append the map container to the main container
infoContainer.appendChild(mapContainer);

// Append the main container to the document body or a target element
mainSection.appendChild(infoContainer);
} 