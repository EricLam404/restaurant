import createNavbar from "./components";

function loadMenu(){
    removeChildren();
    createNavbar();
    menu()
}


function removeChildren(){
    const content = document.getElementById('content');

    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
}

function menu(){
    let menu = [["Cheese Pizza", 10],
        ["Pepperoni Pizza", 12],
        ["Supreme Pizza", 12],
        ["White Pizza", 10],
        ["Buffalo Chicken Pizza", 12]
    ];

    let content = document.getElementById('content');

    for(let i = 0; i < menu.length; i++){
        content.append(createCard(menu[i][0], menu[i][1]));
    }

}

function createCard(item, cost){
    let card = document.createElement('div');
    card.classList.add("card");

    let name = document.createElement('div');
    let price = document.createElement('div');

    name.textContent = item;
    price.textContent = "$" + cost;

    card.append(name, price);

    return card;
}
export default loadMenu;
