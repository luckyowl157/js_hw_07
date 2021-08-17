// Напиши скрипт который, 
// при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

let inputRef = document.querySelector('#name-input');
let outputRef = document.querySelector('#name-output');


inputRef.addEventListener('input', (event) => {
    if(inputRef.value.length == 0) {
        console.log('незнакомец');
        outputRef.textContent = 'незнакомец';
    } else {
        let inputValue = event.target.value;
        outputRef.innerText = inputValue;
    }
})