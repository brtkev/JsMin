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
            "type" : "svg",
            "content" : "M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
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
    ],
    footerButtonsLeft : [
        "Sobre Google",
        "Publicidad",
        "Negocios",
        "Cómo funciona la Búsqueda"
    ],
    footerButtonsRight : [ "Privacidad","Condiciones","Preferencias" ]
}


const topNav = document.getElementById('nav-container');
const mainSection = document.getElementById('main-container');
const footer = document.getElementById('footer-container');

document.body.onload = loadElements;

function loadElements(){
    addNavButtons();
    addTitle();
    addInput();
    addSectionButtons();
    addFooter();
    accountMenu();
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
            
        }else if(buttonInfo.type === 'svg'){
            buttonElement.classList.add('nav__roundButton');
            buttonElement.insertAdjacentHTML('afterbegin', '<svg class="nav__svg" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>')
            buttonElement.id = 'button-googleApps'
            buttonElement.addEventListener('click', googleApps);
        }
        
        topNav.appendChild(buttonElement);

    } );

}

const googleApps = () => {
    let container = document.getElementById('googleApps-container');
    if(container){
        return container;
    }

    container = document.createElement('div');
    const ul = document.createElement('ul');
    container.id = 'googleApps-container';
    ul.id = 'googleApps-ul';

    for(let i = 0; i < 32; i++ ){
        const li = document.createElement('li');
        const image = document.createElement('img');
        image.src = "https://lh3.googleusercontent.com/ogw/ADea4I65wo3jJ_DKgfdE-AyW51o_71Zv_gC7uAZF-w-J=s32-c-mo";
        image.alt = "app icon"

        const name = document.createElement('p');
        name.append(document.createTextNode('App'))

        li.append(image, name);
        ul.appendChild(li);
    }

    const moreButton = document.createElement('button');
    moreButton.id = 'googleApps__more';
    moreButton.innerText = "Más de Google";

    container.append(ul, moreButton);
    document.body.append(container);

    const closeMenu = ev => {
        console.log('bodyclick')
        if(!ev.target.closest('#googleApps-container') && !ev.target.closest('#button-googleApps')){
            document.querySelector('#googleApps-container').remove();
            document.body.removeEventListener('click', closeMenu);
        }              
    }
    document.body.addEventListener('click', closeMenu);

    return container;
}

const accountMenu = () => {

    let container;

    container = document.createElement('div');
    container.id = 'googleAccount-container';


    const management = document.createElement('section');
    management.id = 'googleAccount-managementSec'

    let image = document.createElement('img');
    image.src = "https://lh3.googleusercontent.com/ogw/ADea4I65wo3jJ_DKgfdE-AyW51o_71Zv_gC7uAZF-w-J=s83-c-mo";
    image.alt = "userprofile button"

    let name = document.createElement('p');
    name.innerText = "name lastName";
    name.classList.add('name');
    let mail = document.createElement('p');
    mail.innerText = "johndoe123@gmail.com";
    mail.classList.add('mail')

    let button = document.createElement('button');
    button.id = 'googleAccount-manageButton';
    button.innerText = "Gestionar tu cuenta de Google";

    management.append(image, name, mail, button);


    


    container.append(management);
    document.body.append(container);

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

const addFooter = () => {

    const topSection = document.createElement('section');
    topSection.id = 'footer__topSection'
    const topText = document.createElement('p');
    topText.append(document.createTextNode('Venezuela'));
    topSection.appendChild(topText);

    const botSection = document.createElement('section');
    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');
    botSection.id = 'footer__botSection';
    leftDiv.classList.add('footer__button-container')
    rightDiv.classList.add('footer__button-container')

    db.footerButtonsLeft.forEach( text => {
        const button = document.createElement('button');
        button.append(document.createTextNode(text));
        button.classList.add('footer__button');


        leftDiv.appendChild(button);
    });

    db.footerButtonsRight.forEach( text => {
        const button = document.createElement('button');
        button.append(document.createTextNode(text));
        button.classList.add('footer__button');


        rightDiv.appendChild(button);
    });

    botSection.append(leftDiv, rightDiv);

    footer.append(topSection, botSection);
}