// Завдання 1
// В HTML є список категорій ul#categories.
// варини
// <ul>
//  <li>Кіт</li>
//  <li>Хом'як</li>
//  <li>Кінь</li>
//  <li>Папуга</li>
// </ul>

// Продукти
// <ul>
//  <li>Хліб</li>
//  <li>Петрушка</li>
//  <li>Сир</li>
// </ul>

// Технології
// <ul>
//  <li>HTML</li>
//  <li>CSS</li>
//  <li>JavaScript</li>
//  <li>React</li>
//  <li>Node</li>
// </ul>

// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4

const categories = document.querySelector('#categories');
console.log(`У списку ${categories.children.length} категорії.`);
const items = document.querySelectorAll('.item');

//Я не розумію як зробит це завдання =(

//-------------------------------------------------------------------------------------------------------------------------

// Завдання 2
// В HTML є пустий список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS є масив рядків.
const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().
const ingredientsList = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
 const item = document.createElement('li');
 item.textContent = ingredient;
 return item;
});
ingredientsList.append(...elements);

//-------------------------------------------------------------------------------------------------------------------------
// Завдання 3
// Напиши скрипт для створення галереї зображень по масиву даних.
// В HTML є список ul#gallery.
// <ul id="gallery"></ul>
// Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().
// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.

const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

const gallery = document.querySelector('#gallery');
const elementsEl = images.map(image => {
 return `<li><img src="${image.url}" alt="${image.alt}"></li>`;
});
gallery.insertAdjacentHTML('beforeend', elementsEl.join(''));

//-------------------------------------------------------------------------------------------------------------------------

// Завдання 4
// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.
// Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
// <div id="counter">
//  <button type="button" data-action="decrement">-1</button>
//  <span id="value">0</span>
//  <button type="button" data-action="increment">+1</button>
// </div>

const counter = document.querySelector('#counter');
const value = document.querySelector('#value');
const decrement = counter.firstElementChild;
const increment = counter.lastElementChild;
let counterValue = 0;
const incrementFn = () => {
 counterValue += 1;
 value.textContent = counterValue;
};
const decrementFn = () => {
 counterValue -= 1;
 value.textContent = counterValue;
};
increment.addEventListener('click', incrementFn);
decrement.addEventListener('click', decrementFn);