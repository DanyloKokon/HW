// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const users = {
    hobby: 'playing',
    premiun: false,
}
users.mood = 'happy'
const keys = Object.keys(users)
let total;
console.log(keys);
for (const key of keys) {
    total+=users[key]
}
// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
const countProps = function (obj) {
    const keys = Object.keys(obj)
    return keys.length
}
console.log(countProps({})); // 0
console.log(countProps({ a: 1, b: 3, c: 'hello' })); // 3
// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
const findBestEmployee = function (employees) {
    let max = 0;
    let name;
    const keys = Object.keys(employees)
    for (const key of keys) {
        if (employees[key] > max) {
            max = employees[key]
            name = key
        }
    }
    return name
}
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    })
); // lorence
// Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
const countTotalSalary = function (employees) {
    let total = 0;
    const values = Object.values(employees)
    for (const value of values) {
        total += value
    }
    return total
}
console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    })
); // 330
// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
]
const getAllPropValues = function (arr, prop) {
    const values = []
    for (const product of arr) {
        if (prop in product) {
            values.push(product[prop])
        }
    }
    return values
}
console.log(getAllPropValues(products, 'name')) // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropValues(products, 'quantity')) // [4, 3, 7, 2] 

// Завдання 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
const calculateTotalPrice = function (allProducts, productName) {
    let total = 0;
    for (const product of allProducts) {
        if (product.name === productName) {
            total = product.price * product.quantity
        }
    }
    return total
}
console.log(calculateTotalPrice(products, 'Радар')) // 5200
console.log(calculateTotalPrice(products, 'Дроїд')) // 2800

// Викличи функції для перевірки працездатності твоєї реалізації.