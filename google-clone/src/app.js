
const db = {
    title : 'Google',
    titleColor : ['lightblue', 'red', 'yellow', 'lightblue', 'green', 'red'],
    navButtons : [
        {
            "type" : "text",
            "content" : "Gmail"
        },
        {
            "type" : "text",
            "content" : "Imágenes"
        },
        {
            "type" : "text",
            "content" : "Menu"
        },
        {
            "type" : "image",
            "content" : "https://lh3.googleusercontent.com/ogw/ADea4I65wo3jJ_DKgfdE-AyW51o_71Zv_gC7uAZF-w-J=s32-c-mo"
        },
    ],
    sectionButtons : [
        {
            "type" : "text",
            "content" : "Buscar con Google"
        },
        {
            "type" : "text",
            "content" : "Me siento con suerte"
        }
    ]
}

topNav = document.getElementById('nav-container');
mainSection = document.getElementById('main-container');

document.body.onload = loadElements;

function loadElements(){
    addNavButtons();
    addTitle();
    addInput();
    addSectionButtons();
}

const addNavButtons = ( ) => {
    db.navButtons.forEach( buttonInfo => {
        let buttonElement = document.createElement('button');
        buttonElement.classList.add('nav__button');
        
        if(buttonInfo.type === "text"){
            buttonElement.appendChild(document.createTextNode(buttonInfo.content)); 
        }else if(buttonInfo.type === "image"){
            buttonElement.classList.add('nav__roundButton');
            let image = document.createElement('img');
            image.src = "https://lh3.googleusercontent.com/ogw/ADea4I65wo3jJ_DKgfdE-AyW51o_71Zv_gC7uAZF-w-J=s32-c-mo";
            image.alt = "userprofile button"
            buttonElement.appendChild(image); 
            
        }
        
        topNav.appendChild(buttonElement);

    } );

}

const addTitle = () => {
    
    const title = document.createElement('img');
    title.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    title.alt = "google logo"
    title.id = 'title'
    mainSection.appendChild(title);
}

const addInput = () => {
    const container = document.createElement('div');
    container.id = 'input-container';

    const leftIconContainer = document.createElement('div');
    const rightIconContainer = document.createElement('div');
    leftIconContainer.id = 'input__leftIconContainer';
    rightIconContainer.id = 'input__rightIconContainer';
    rightIconContainer.style.visibility = 'hidden';

    const searchIcon = document.createElement('img');
    searchIcon.src = "https://fonts.gstatic.com/s/i/materialiconsoutlined/search/v12/24px.svg";
    searchIcon.alt = "search icon";
    searchIcon.id = 'input__left-icon'

    const clearIcon = document.createElement('img');
    clearIcon.src = "https://fonts.gstatic.com/s/i/materialiconsoutlined/clear/v11/24px.svg";
    clearIcon.alt = "clear icon";
    clearIcon.id = 'input__right-icon'

    
    const input = document.createElement('input');
    input.id = 'input';
    input.type = 'text';
    
    input.addEventListener('input', (ev) => {
        if(ev.target.value !== ''){
            rightIconContainer.style.visibility = 'visible';
        }else{
            rightIconContainer.style.visibility = 'hidden';
        }
    });
    
    clearIcon.addEventListener('click', ev => {
        input.value = '';
        rightIconContainer.style.visibility = 'hidden';
    });

    
    leftIconContainer.appendChild(searchIcon);
    rightIconContainer.appendChild(clearIcon);
    container.appendChild(leftIconContainer);
    container.appendChild(rightIconContainer);
    container.appendChild(input);
    mainSection.appendChild(container);
}


const addSectionButtons = () => {

    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'section__buttonContainer'

    db.sectionButtons.forEach( buttonInfo => {
        const newButton = document.createElement('button');
        newButton.appendChild(document.createTextNode(buttonInfo.content));
        newButton.classList.add('section__button')

        buttonContainer.appendChild(newButton);
    });

    const bottomText = document.createElement('p');
    bottomText.appendChild(document.createTextNode('Ofrecido por Google en: '));
    const linkEn = document.createElement('a');
    linkEn.href = '#'
    linkEn.text = 'English'
    const linkEs = document.createElement('a');
    linkEs.href = '#'
    linkEs.text = 'Español (Latinoamérica)'

    bottomText.append(linkEn, ' ', linkEs)

    bottomText.id = 'section__bottomText';

    buttonContainer.appendChild(bottomText);

    mainSection.appendChild(buttonContainer);

}