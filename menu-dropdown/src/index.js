document.body.onload = () => {

    let buttons = document.body.querySelectorAll('.nav-button');
    [...buttons].forEach( button => button.id === 'resourcesButton'
    ? button.addEventListener('click', openDropdown)
    : button.addEventListener('click', youDidNotJustDoThat));

    addDropdownButtonEvents();
}

let count = 0;
let resourcesClicked = false;
const responses = [
    "Comming soon ❤",
    "we all make mistakes, now click resources :)",
    "nop, that's the wrong button",
    "...",
    "you only had to do one thing",
    "WHY? I told you to click resources!!!",
    "😡",
    "ok I don't care anymore just do as you please"
]
let indicator = document.getElementById('indicator');
const youDidNotJustDoThat = (ev) => {
    if(count < responses.length && !resourcesClicked){
        indicator.innerText = responses[count];
    }else if(resourcesClicked && count === 0){
        indicator.innerText = responses[count];
    }
    count++;
}

let lastActiveDropdownButton = undefined;

const openDropdown = (ev) => {
    if(count > 3 && !resourcesClicked){
        indicator.innerText = "see? it wasn't that hard";
    }else if(!resourcesClicked){
        indicator.innerText = "nice! :)";
    }
    resourcesClicked = true;

    ev.currentTarget.classList.toggle('active')
    let dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');

    if(lastActiveDropdownButton) lastActiveDropdownButton.classList.toggle('active');
    lastActiveDropdownButton = undefined;

    if(dropdown.classList.contains('active'))document.body.addEventListener('click', closeDropdown );
    else document.body.removeEventListener('click', closeDropdown);
}

const closeDropdown = (ev) => {
    if(!ev.target.closest('#dropdown') && !ev.target.closest('#resourcesButton')){
        document.getElementById('dropdown').classList.remove('active');
        document.getElementById('resourcesButton').classList.remove('active');
        document.body.removeEventListener('click', closeDropdown);
    }
}
const addDropdownButtonEvents = () => {
    let buttons = document.getElementById('dropdown').querySelectorAll('button');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', activateButtonStyle);
    }
}



const activateButtonStyle = (ev) => {
    ev.currentTarget.classList.toggle('active');
    if(lastActiveDropdownButton) lastActiveDropdownButton.classList.toggle('active');
    lastActiveDropdownButton = ev.currentTarget;
}