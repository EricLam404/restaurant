const context = document.createElement('div')
context.setAttribute('id', 'content');

document.body.appendChild(context);

function home() {
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

function loadHome(){
    removeChildren();
    
    const content = document.getElementById('content');

    content.appendChild(home());
}

function removeChildren(){
    const content = document.getElementById('content');

    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
}

export default loadHome;