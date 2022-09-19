function loadContact(){
    removeChildren();
}

function removeChildren(){
    const content = document.getElementById('content');

    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
}
export default loadContact;
