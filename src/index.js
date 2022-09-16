import './style.css';

function main() {
    const element = document.createElement('div');
    element.classList.add('box');
    
    element.appendChild(welcomeText());
    element.appendChild(textBody());

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

    console.log(content);
    content.appendChild(main());
    console.log(content);
}

loadPage();
