'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const hobbiesSection = document.getElementById('hobbies');
    const hobbiesContainer = document.getElementById('hobbies-container');
    
    const addHobbyBtn = document.getElementById('add-hobby');
    const switchViewBtn = document.getElementById('switch-view');
    const darkThemeBtn = document.getElementById('dark-theme');
    const closeHobbiesBtn = document.getElementById('close-hobbies');

    function checkElement(element, name) {
        if (!element) {
            console.error("Ошибка: Элемент не найден: " + name);
            return false;
        }
        return true;
    }

    const isSectionExist = checkElement(hobbiesSection, '#hobbies');
    const isContainerExist = checkElement(hobbiesContainer, '#hobbies-container');
    const isAddBtnExist = checkElement(addHobbyBtn, '#add-hobby');
    const isSwitchBtnExist = checkElement(switchViewBtn, '#switch-view');
    const isThemeBtnExist = checkElement(darkThemeBtn, '#dark-theme');
    const isCloseBtnExist = checkElement(closeHobbiesBtn, '#close-hobbies');

    if (!isSectionExist || !isContainerExist || !isAddBtnExist || !isSwitchBtnExist || !isThemeBtnExist || !isCloseBtnExist) {
        return; 
    }

    console.log('Все элементы найдены. DOM готов к работе.');

    function createHobbyElement(title, description) {
        const div = document.createElement('div');
        div.className = 'hobby-item';

        const icon = document.createElement('span');
        icon.textContent = '🖌';
        icon.style.fontSize = '60px';
        icon.style.marginRight = '15px';

        const textDiv = document.createElement('div');
        textDiv.className = 'hobby-text';

        const h3 = document.createElement('h3');
        h3.textContent = title;

        const p = document.createElement('p');
        p.textContent = description;

        textDiv.append(h3, p);
        div.append(icon, textDiv);
        
        return div;
    }

    addHobbyBtn.addEventListener('click', () => {
        const title = prompt('Введите название хобби:');
        if (title === null) {
            return;
        }
        
        if (!title.trim()) {
            alert('Название не может быть пустым!');
            return;
        }

        const description = prompt('Введите короткое описание:');
        if (description === null) {
            return;
        }

        const newHobby = createHobbyElement(title.trim(), description.trim() || 'Без описания');
        hobbiesContainer.appendChild(newHobby);
    });
});