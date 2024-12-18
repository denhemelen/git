(function() {
    console.log("Мова браузера: " + window.navigator.language);
})();

// a. Створення масиву чисел
const numbers = [10, 25, 45, 60, 30, 80, 50, 12, 5, 90];

// b. Використання методу map
const doubledNumbers = numbers.map(num => num * 2);
console.log("Подвоєні числа:", doubledNumbers);

// c. Використання методу filter
const filteredNumbers = numbers.filter(num => num > 40);
console.log("Числа більше 40:", filteredNumbers);

// d. Використання методу reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Сума всіх чисел:", sum);

function sumAll(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}

console.log("Сума всіх аргументів:", sumAll(1, 2, 3, 4, 5)); // Приклад використання


// a. Створення Map
const studentGrades = new Map();
studentGrades.set("Михайловський", 85);
studentGrades.set("Денис", 92);
studentGrades.set("Володимирович", 78);

// b. Перебір Map
for (const [name, grade] of studentGrades) {
    console.log(`${name}: ${grade}`);
}


const person1 = {
    firstName: "Михайловський",
    lastName: "Денис"
};

const person2 = {
    firstName: "група",
    lastName: "ІПЗм-41"
};

function greet() {
    console.log(`Привіт, ${this.firstName} ${this.lastName}!`);
}

// Використання call
greet.call(person1);
greet.call(person2);

// Використання apply
greet.apply(person1);
greet.apply(person2);


function createCounterWithStart(start) {
    let count = start; // Змінна для зберігання значення лічильника
    return function() {
        count += 1; // Збільшення значення лічильника
        console.log(count); // Виведення значення в консоль
    };
}

const counter = createCounterWithStart(0);
counter(); // Виведе 1
counter(); // Виведе 2
counter(); // Виведе 3
