import createNavbar from "./components";

function loadMenu(){
    removeChildren();
    createNavbar();

}


function removeChildren(){
    const content = document.getElementById('content');

    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
}
export default loadMenu;
