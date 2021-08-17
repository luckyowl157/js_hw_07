// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.


let inputRef = document.querySelector('#validation-input');


let dataLength = inputRef.getAttribute('data-length');
inputRef.addEventListener('blur', (event) => {
    console.log('Blur');

    if(event.target.value.length == dataLength) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
});