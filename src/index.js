import './style.css';
import bg from './img/background.png';

let container = document.createElement("div");
container.classList.add('content');

function background() {
    const element = document.createElement('div');
    element.classList.add('box');
 
    return element;
}
container.appendChild(background());

document.body.appendChild(container);
console.log(container);

