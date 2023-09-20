import {createHomePage} from './home.js'
import {createMenuPage} from './menu.js'
import {createContactPage} from './contact.js'

const createTabs = () => {
    const mainContent = document.querySelector('#content');
    const tabsDiv = document.createElement('div');
    tabsDiv.classList.add('tabs-div');

    // add 3 sub-divs for the 3 different tabs
    const homeTab = document.createElement('div');
    homeTab.classList.add('tab');
    homeTab.innerText = 'Home';
    const menuTab = document.createElement('div');
    menuTab.classList.add('tab');
    menuTab.innerText = 'Menu';
    const contactTab = document.createElement('div');
    contactTab.classList.add('tab');
    contactTab.innerText = 'Contact';
    tabsDiv.appendChild(homeTab);
    tabsDiv.appendChild(menuTab);
    tabsDiv.appendChild(contactTab);
    mainContent.appendChild(tabsDiv);

    // add event listener to each tab such that when click on each repective tabs will run respective createPage functions
    homeTab.addEventListener('click',() => {
        clearPage();
        createHomePage();
    })
    menuTab.addEventListener('click',() => {
        clearPage();
        createMenuPage();
    })
    contactTab.addEventListener('click',() => {
        clearPage();
        createContactPage();
    })
}

function clearPage() {
    const pageContent = document.querySelector('.page-content')
    pageContent.remove();
}

export {createTabs}