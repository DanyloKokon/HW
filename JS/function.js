// ctrl + I

// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента
//  масиву буде виводити в консоль повідомлення в форматі[номер елемента]-[значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву['Mango', 'Poly', 'Ajax'] з
//  індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.\


// function logItems(aray) {
//     let coun = 0;
//         for (const nams of aray) {
//             coun += 1;
//             console.log(`${coun} - ${nams}`)
//         }
//     }
// logItems(['Mango', 'Poly', 'Ajax'])




// Завдання 2
//Напиши скрипт підрахунку вартості гравіювання прикрас.
//Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок
//(в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку

function calculateEngravingPrice(message, pricePerWord) {
    let words = message.split(' ');
    let total = words.length * pricePerWord;
    return total;
}

console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); // 80

// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок
//(в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.
function findLongestWord(string) {
    let words = string.split(' ');
    let longestWord = words[0];
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'


// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка
// три крапки '...', після чого повертає укорочену версію.
function formatString(string) {
    if (string.length > 40) {
      return  string.slice(0, 40) + '...';
}
    return string;
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// повернеться оригінальний рядок

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// повернеться форматований рядок

// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale.
// Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false.
// Слова в рядку можуть бути в довільному регістрі.
function checkForSpam(message) {
    let normalizedMessage = message.toLowerCase();
    return normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
}


console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// Завдання 6
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.
let input;
const numbers = [];
let total = 0;
do {
    input = prompt('Введіть число');
    if (input === null) {
        break;
    }
    if (isNaN(input)) {
        alert('Було введено не число, попробуйте ще раз');
        continue;
    }
    numbers.push(Number(input));
} while (true);
for (const number of numbers) {
    total += number;
}
console.log(`Загальна сума чисел дорівнює ${total}`);