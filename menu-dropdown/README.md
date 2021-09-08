


## click resources button without it closing on me

it would close because the event listener that was added to the body with the dropdown would close it if 
any thing was clicked but the dropdown itself.
```javascript
const closeDropdown = (ev) => {
    if(!ev.target.closest('#dropdown')){
        document.getElementById('dropdown').classList.remove('active');
        document.getElementById('resourcesButton').classList.remove('active');
        document.body.removeEventListener('click', closeDropdown);
    }
}
```

> so the solution was just to add the open button itself to the close filter
```javascript
const closeDropdown = (ev) => {
    if(!ev.target.closest('#dropdown') && !ev.target.closest('#resourcesButton')){
        document.getElementById('dropdown').classList.remove('active');
        document.getElementById('resourcesButton').classList.remove('active');
        document.body.removeEventListener('click', closeDropdown);
    }
}
```

there was also a bug where you could add infinite amount of close events without them ever getting removed 
this is the fix

```javascript
if(dropdown.classList.contains('active')) document.body.addEventListener('click', closeDropdown );
else document.body.removeEventListener('click', closeDropdown);
```