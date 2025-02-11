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
    // for (const {name, price, quantity} of allProducts) {
    //     if (name === productName) {
    //         total = price * quantity
    //     }
    // }
    for (const product of allProducts) {
        const {name, price, quantity} = product
        if (name === productName) {
            total = price * quantity
        }
    }
    return total
}
console.log(calculateTotalPrice(products, 'Радар')) // 5200
console.log(calculateTotalPrice(products, 'Дроїд')) // 2800

// Викличи функції для перевірки працездатності твоєї реалізації.

// Завдання 7 
// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  /*
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount
   */
  const account = {
    // Поточний баланс рахунку
    balance: 0,
    // Історія транзакцій
    transactions: [],

    // sumBalance(){
    //     for (const {type, amount} of this.transactions) {
    //         if (type === Transaction.DEPOSIT) {
    //             this.balance+=amount
    //         }else if (type === Transaction.WITHDRAW) {
    //             this.balance-=amount
    //         }
    //     }
    //     console.log(this.balance);
    // },





    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) {
        return {
            id: Math.random(),
            type: type,
            amount: amount,
        }

    },
    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {
        this.getBalance()
       const newTransaction =  this.createTransaction(amount, Transaction.DEPOSIT)
        this.transactions.push(newTransaction)
    },
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
        this.getBalance()
        if (this.balance < amount) {
            alert('NO MONEY, NO HONEY') 
            return
        }
        const GiveMeMyMoney = this.createTransaction(amount, Transaction.WITHDRAW)
        this.transactions.push(GiveMeMyMoney)
    },
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        for (const {type, amount} of this.transactions) {
            if (type === Transaction.DEPOSIT) {
                this.balance+=amount
            }else if (type === Transaction.WITHDRAW) {
                this.balance-=amount
            }
        }
        return this.balance 
    },
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {},
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {},
  };
  
account.deposit(100)
account.deposit(100)
account.withdraw(10)
console.log(account);
// account.getBalance()
  