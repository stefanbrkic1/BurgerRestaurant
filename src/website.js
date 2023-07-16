import './style.css'
import githubLogo from './img/github.png'

export default function openWebsite(){
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
    mainSection.id = 'mainSection'

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