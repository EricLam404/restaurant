import './style.css';

const context = document.createElement('div')
context.setAttribute('id', 'content');

document.body.appendChild(context);

function main() {
    const element = document.createElement('div');
    element.classList.add('box');

    const body = document.getElementById('content')
    
    body.appendChild(navbar());
    element.appendChild(welcomeText());
    element.appendChild(textBody());

    return element;
}

function navbar(){
    const element = document.createElement('div');
    element.classList.add('navbar');

    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    home.href = "#home";
    menu.href = "#menu";
    contact.href = "#contact";

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";


    element.append(home, menu, contact);
    return element;
}

function welcomeText(){
    const text = document.createElement('div');
    text.classList.add('text');

    text.textContent = "Welcome to our Pizzeria!";
    return text;
}

function textBody(){
    const textBody = document.createElement('div');
    textBody.classList.add('textBody');

    textBody.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae finibus mi. Nullam tempus nisi sed libero sollicitudin, lacinia eleifend odio sollicitudin. Proin risus mi, sodales quis tristique eu, aliquet a velit.";
    return textBody;
}

function loadPage(){
    const content = document.getElementById('content');

    content.appendChild(main());
    console.log(content);
}

loadPage();
