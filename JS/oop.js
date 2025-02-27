// Завдання 2
// Напиши клас User для створення користувача з наступними властивостями:
// name — рядок
// age — число
// followers — число
// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers
const mango = new User({
 name: 'Mango',
 age: 2,
 followers: 20,
});

mango.getInfo(
); // User Mango is 2 years old and has 20 followers

const poly = new User({
 name: 'Poly',
 age: 3,
 followers: 17,
});

poly.getInfo(
); // User Poly is 3 years old and has 17 followers

const poly = new User({
 name: 'Poly',
 age: 3,
 followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers


// Завдання 3
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.
// Додай методи класу:
// getItems() —повертає масив поточних товарів
// addItem(item) —отримує новий товар і додає його до поточних
// removeItem(item) — отримує товар і, якщо він є, видаляє його з поточних
const storage = new Storage([
 'Нанітоіди',
 'Пролонгер',
 'Залізні жупи',
 'Антигравітатор',
]);

const items = storage.getItems(

);

console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]