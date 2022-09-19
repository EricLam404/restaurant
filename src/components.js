import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createNavbar(){
    document.body.appendChild(navbar());
    addOnClick();
}

function navbar(){
    const element = document.createElement('div');
    element.classList.add('navbar');

    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    home.classList.add("tab", "home");
    menu.classList.add("tab");
    contact. classList.add("tab");

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    element.append(home, menu, contact);
    return element;
}

function addOnClick(){
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", changeTab);
    });
}

function changeTab(e){
    let tab = e.target.textContent;
    if(tab === "Home"){
        loadHome();
    }
    if(tab === "Menu"){
        loadMenu();
    }
    if(tab === "Contact"){
        loadContact();
    }
}

export default createNavbar;