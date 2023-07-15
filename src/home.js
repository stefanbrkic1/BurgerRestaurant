import './style.css'
import icon from './img/icon.svg'
import githubLogo from './img/github.png'

export default function openHomeTab(){
    const content = document.getElementById('content')

    //Tab Menu Section
    const tabMenu = document.createElement('div')
    tabMenu.classList.add('tab-menu')

    const homeTab = document.createElement('div')
    homeTab.id = 'homeTab'
    homeTab.classList.add('tab')
    homeTab.classList.add('tab-active')
    homeTab.innerHTML = 'Home';

    tabMenu.appendChild(homeTab)

    const menuTab = document.createElement('div')
    menuTab.id = 'menuTab'
    menuTab.classList.add('tab')
    menuTab.innerHTML = 'Menu';

    tabMenu.appendChild(menuTab)

    const contactTab = document.createElement('div')
    contactTab.id = 'contactTab'
    contactTab.classList.add('tab')
    contactTab.innerHTML = 'Contact';

    tabMenu.appendChild(contactTab)

    //Main 
    const mainSection = document.createElement('div')
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

                btnIcon.appendChild(arrowIcon)
        buttonOrder.appendChild(btnIcon)
        containerLeft.appendChild(buttonOrder) 

    mainSection.appendChild(containerLeft)

    const containerRight = document.createElement('div')
    containerRight.classList.add('container-right')

    mainSection.appendChild(containerRight)

    //Copyright
    const githubContainer = document.createElement('div')
    githubContainer.classList.add('github-container')

        const githubLink = document.createElement('div')
        githubLink.classList.add('github-link')

            const copyrightLink = document.createElement('a')
            copyrightLink.href = 'https://github.com/stefanbrkic1'
            copyrightLink.classList.add('copyright-link')
            copyrightLink.innerHTML = 'Copyright &copy'

                const username = document.createElement('span')
                username.textContent = 'stefanbrkic1'
                username.classList.add('username')

                copyrightLink.appendChild(username)

                const github = new Image()
                github.src = githubLogo
                github.alt = 'github-logo'
                github.classList.add('github')
                
                copyrightLink.appendChild(github)

        githubLink.appendChild(copyrightLink)
    githubContainer.appendChild(githubLink)  
    
    content.appendChild(tabMenu)
    content.appendChild(mainSection)
    content.appendChild(githubContainer)
} 