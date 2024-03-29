// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let counterValue = 0;
let spanValRef = document.querySelector('#value');
let decrementRef = document.querySelector('[data-action="decrement"]');
let incrementRef = document.querySelector('[data-action="increment"]');


function increment () {
    counterValue += 1;
    spanValRef.textContent = counterValue;
};

function decrement () {
    counterValue -= 1;
    spanValRef.textContent = counterValue;
};

// Events
incrementRef.addEventListener('click', increment);

decrementRef.addEventListener('click', decrement);