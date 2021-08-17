// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

let ul = document.querySelector('ul#ingredients');
console.log(ul);


function createList(ingredients, domElem) {
  let html = '';

  ingredients.forEach((ingredient) => {
    html += `<li>${ingredient}</li>`;
  });
    domElem.innerHTML = html;
    console.log(html);
    console.log('dom', domElem);
    return domElem;
};

createList(ingredients, ul);





// console.log(list);

