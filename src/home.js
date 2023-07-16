import './style.css'
import icon from './img/icon.svg'
import openMenuTab from './menu'

export default function openHomeTab() {
    const content = document.getElementById('content')
    content.classList.remove('menu-content')
    content.classList.add('content')
    //Main 
    const mainSection = document.getElementById('mainSection')
    mainSection.innerHTML = ''
    mainSection.classList.remove('menu-main')
    mainSection.classList.remove('contact-main')
    mainSection.classList.add('main')

    const containerLeft = document.createElement('div')
    containerLeft.classList.add('container-left')

    const headlineTop = document.createElement('div')
    headlineTop.classList.add('headline-top')
    headlineTop.innerHTML = 'Delicious'

    containerLeft.appendChild(headlineTop)

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.innerHTML = 'BURGER'

    containerLeft.appendChild(headline)

    const text = document.createElement('div')
    text.classList.add('text')
    text.innerHTML = 'Indulge in mouthwatering, handcrafted burgers that will satisfy your cravings and leave you wanting more.'

    containerLeft.appendChild(text)

    const buttonOrder = document.createElement('button')
    buttonOrder.classList.add('cssbuttons-io-button')
    buttonOrder.id = 'orderBtn'
    buttonOrder.innerHTML = 'ORDER NOW'
    const btnIcon = document.createElement('div')
    btnIcon.classList.add('icon')
    const arrowIcon = new Image()
    arrowIcon.src = icon

    buttonOrder.addEventListener('click', () => {
        homeTab.classList.remove('tab-active')
        contactTab.classList.remove('tab-active')
        menuTab.classList.add('tab-active')

        openMenuTab();
    })

    btnIcon.appendChild(arrowIcon)
    buttonOrder.appendChild(btnIcon)
    containerLeft.appendChild(buttonOrder)

    mainSection.appendChild(containerLeft)

    const containerRight = document.createElement('div')
    containerRight.classList.add('container-right')

    mainSection.appendChild(containerRight)
} 