// Завдання 1
 //<div class="slider">
  //<input type="range" min="1" max="100" value="50" class="slider__input" />
  //<img src="https://via.placeholder.com/300x300" class="slider__image" />

// Створіть слайдер на сторінці, який показує зображення. При переміщенні слайдера виконуйте деякі дії, наприклад, змінюйте розмір зображення. Використайте debounce для того, щоб ці дії виконувалися не занадто часто при швидкому переміщенні слайдера. JS
const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
const updateImageSize = () => {
  const size = sliderInput.value;
  sliderImage.style.width = `${size}%`;
  sliderImage.style.height = `${size}%`;
};
sliderInput.addEventListener('input', debounce(updateImageSize, 100));
