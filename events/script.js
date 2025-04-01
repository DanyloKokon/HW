// 2.Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const validationInput = document.querySelector("#validation-input");
// <input type="text" placeholder="Ваше ім'я?" id="name-input" />
// <h1>Привіт, <span id="name-output">незнайомець</span>!</h1>
input.addEventListener("input", (event) => {
  if (event.target.value === "") {
    output.textContent = "незнайомець";
  } else {
    output.textContent = event.target.value;
  }
});
// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символів"/>
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.



// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }

//Я НЕ ЗРОЗУМІВ((

//=======================================================================

// 3. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.
// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>



const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
fontSizeControl.addEventListener("input", (event) => {
  text.style.fontSize = `${event.target.value}px`;
});



// ========================================================================

// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно
// <form>
//   <p>Choose a color:</p>
//   <label>
//     <input type="radio" name="color" value="red" checked />
//     Red
//   </label>
//   <label>
//     <input type="radio" name="color" value="white" />
//     White
//   </label>
//   <label>
//     <input type="radio" name="color" value="green" />
//     Green
//   </label>
// </form>



const form = document.querySelector("form");
const body = document.querySelector("body");

form.addEventListener("change", (event) => {
  const selectedColor = event.target.value;
  body.style.backgroundColor = selectedColor;
});