import './style.css'
import openWebsite from './website';
import openHomeTab from './home'
import openMenuTab from './menu'
import openContactTab from './contact';

window.onload = function () {
    openWebsite()
    openHomeTab()

    const homeTab = document.getElementById('homeTab')
    const menuTab = document.getElementById('menuTab')
    const contactTab = document.getElementById('contactTab')

    homeTab.addEventListener('click', () => {
        if (homeTab.classList.contains('tab-active')) {
            return
        }
        else {
            menuTab.classList.remove('tab-active')
            contactTab.classList.remove('tab-active')
            homeTab.classList.add('tab-active')

            openHomeTab();
        }
    })

    menuTab.addEventListener('click', () => {
        if (menuTab.classList.contains('tab-active')) {
            return
        }
        else {
            homeTab.classList.remove('tab-active')
            contactTab.classList.remove('tab-active')
            menuTab.classList.add('tab-active')

            openMenuTab();
        }
    })

    contactTab.addEventListener('click', () => {
        if (contactTab.classList.contains('tab-active')) {
            return
        }
        else {
            homeTab.classList.remove('tab-active')
            menuTab.classList.remove('tab-active')
            contactTab.classList.add('tab-active')

            openContactTab();
        }
    })
};

