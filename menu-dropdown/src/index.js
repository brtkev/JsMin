document.body.onload = () => {

    let resourcesButton = document.getElementById('resourcesButton');
    resourcesButton.addEventListener('click', openDropdown);
    addDropdownButtonEvents();
}

const openDropdown = (ev) => {
    ev.currentTarget.classList.toggle('active')
    let dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');

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

let lastActiveDropdownButton = undefined;

const activateButtonStyle = (ev) => {
    ev.currentTarget.classList.toggle('active');
    if(lastActiveDropdownButton) lastActiveDropdownButton.classList.toggle('active');
    lastActiveDropdownButton = ev.currentTarget;
}