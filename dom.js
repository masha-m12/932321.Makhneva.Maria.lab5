'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Поиск элементов (по заданию: getElementById, querySelector)
    const hobbiesSection = document.getElementById('hobbies');
    const hobbiesContainer = document.getElementById('hobbies-container');
    
    const addHobbyBtn = document.getElementById('add-hobby');
    const switchViewBtn = document.getElementById('switch-view');
    const darkThemeBtn = document.getElementById('dark-theme');
    const closeHobbiesBtn = document.getElementById('close-hobbies');

    // 2. Обработка ошибок: проверка существования
    function checkElement(element, selectorName) {
        if (!element) {
            console.error(`Ошибка: Элемент не найден по селектору "${selectorName}"`);
            return false;
        }
        return true;
    }

    // Проверяем наличие всех элементов
    const isSectionExist = checkElement(hobbiesSection, '#hobbies');
    const isContainerExist = checkElement(hobbiesContainer, '#hobbies-container');
    const isAddBtnExist = checkElement(addHobbyBtn, '#add-hobby');
    const isSwitchBtnExist = checkElement(switchViewBtn, '#switch-view');
    const isThemeBtnExist = checkElement(darkThemeBtn, '#dark-theme');
    const isCloseBtnExist = checkElement(closeHobbiesBtn, '#close-hobbies');

    // Если хотя бы одного элемента нет — прекращаем выполнение скрипта
    if (!isSectionExist || !isContainerExist || !isAddBtnExist || !isSwitchBtnExist || !isThemeBtnExist || !isCloseBtnExist) {
        return; 
    }

    console.log('Все элементы найдены. DOM готов к работе.');
});