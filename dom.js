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
});