// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.
//<input type="text" id="text">
//<button id="btn">Click</button>
let text = document.getElementById('text');
let btn = document.getElementById('btn');
btn.textContent = text.value;

// Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.
//   <h1 id="title">Hello</h1>
//<img id="img" src="./img/1.jpg" alt="">
let title = document.getElementById('title');
let img = document.getElementById('img');
img.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fpicture&psig=AOvVaw37LkmRnbuQchKdUm9Fo2-g&ust=1742573225707000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjn8qOFmYwDFQAAAAAdAAAAABAl';

// Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.
//{ <a id="link" href="https://www.google.com">Google</a>
//    <img id="img2" src="./img/2.jpg" alt=""></img> }
let link = document.getElementById('link');
let img2 = document.getElementById('img2');

// Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.
/* <ul id="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
</ul> */
let list = document.getElementById('list');
list.firstElementChild.textContent = 'new text';