import createNavbar from "./components";

function loadContact(){
    removeChildren();
    createNavbar();

    const context = document.createElement('div')
    context.setAttribute('id', 'content');

    document.body.appendChild(context);

    content.appendChild(contact());
    addInfo();

    let navbar = document.querySelector(".three");
    navbar.classList.add("selected");

}

function contact(){
    const element = document.createElement('div');
    element.classList.add('box');

    return element;
}

function addInfo(){
    let title = document.createElement('div');
    title.classList.add('text');
    title.textContent = "Contact Information";

    let role = document.createElement('div');
    let phone = document.createElement('div');
    let email = document.createElement('div');

    role.textContent = "Chef";
    phone.textContent = "555-555-5555";
    email.textContent = "totallyRealEmail@notFake.com";

    let box = document.querySelector('.box');
    box.append(title, role, phone, email);
}

function removeChildren(){
    const content = document.body;

    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
}
export default loadContact;
