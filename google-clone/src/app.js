
const db = {
    title : 'Google',
    titleColor : ['lightblue', 'red', 'yellow', 'lightblue', 'green', 'red'],
    navButtons : [
        "Gmail","Imagenes","menu","perfil"
    ]
}

topNav = document.getElementById('nav-container');
mainSection = document.getElementById('main-container');

document.body.onload = loadElements;

function loadElements(){
    addNavButtons();
    addTitle();
}

const addNavButtons = ( ) => {
    for(let i in db.navButtons){
        let imageButton = document.createElement('button');
        imageButton.appendChild(document.createTextNode(db.navButtons[i])); 
        imageButton.classList.add('nav__button');
        topNav.appendChild(imageButton);
    }
}

const addTitle = () => {
    
    const title = document.createElement('h1');
    [...db.title].forEach( (letter, index) => {
        let span = document.createElement('span');
        span.classList.add(db.titleColor[index]);
        span.appendChild(document.createTextNode(letter));
        title.appendChild(span);
    });

    title.id = 'title'
    mainSection.appendChild(title);
}