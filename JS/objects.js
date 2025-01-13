// 1 - Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "addDeposit", який дозволяє додавати гроші на рахунок, та метод "getWithdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 
const bankAccount = {
    ownerName: 'John Doe',
    accountNumber: '1234567890',
    balance: 1000,
    addDeposit() {
        const deposit = prompt('Введіть суму для поповнення рахунку');
        if (deposit === null) {
            return;
        }
        if (isNaN(deposit)) {
            alert('Було введено не число, попробуйте ще раз');
            return;
        }
        this.balance += Number(deposit);
        alert(`На рахунку ${this.balance} грн`);
    },
    getWithdraw() { 
        const withdraw = prompt('Введіть суму для зняття з рахунку');
        if (withdraw === null) {
            return;
        }
        if (isNaN(withdraw)) {
            alert('Було введено не число, попробуйте ще раз');
            return;
        }
        if (this.balance < Number(withdraw)) {
            alert('На рахунку недостатньо коштів');
            return;
        }
        this.balance -= Number(withdraw);
        alert(`На рахунку ${this.balance} грн`);
    }
};
bankAccount.addDeposit();
bankAccount.getWithdraw();



// 2 - Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const weather = {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    isBelowZero() {
        const temperature = prompt('Введіть температуру');
        if (temperature === null) {
            return;
        }
        if (isNaN(temperature)) {
            alert('Було введено не число, попробуйте ще раз');
            return;
        }
        if (Number(temperature) < 0) {
            alert('Температура нижче 0 градусів Цельсія');
            return true;
        } else{
            alert('Температура вище або рівна 0 градусів Цельсія');
            return false;
        }
        
    }
};
weather.isBelowZero();





// 3 - Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 
const user = {
    name: 'John Doe',
    email: '',
    password: '',
    login() {
        const email = prompt('Введіть email');
        if (email === null) {
            return;
        }
        const password = prompt('Введіть пароль');
        if (password === null) {
            return;
        }
        if (email === this.email && password === this.password) {
            alert('Ви успішно увійшли');
        } else {
            alert('Неправильний email або пароль');
        }
    }
};
user.login();





// 4 - Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль.
const movie = {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994,
    rating: 9.3,
    isRatingAbove8() {
        return this.rating > 8;
    }
};
console.log(movie.title);
console.log(movie.director);
console.log(movie.year);
console.log(movie.rating);
console.log(movie.isRatingAbove8());
