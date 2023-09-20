import {createTabs} from './tabs.js'
import {createHomePage} from './home.js'

function initialPageLoad() {
    createTabs();
    createHomePage();
}

export {initialPageLoad}