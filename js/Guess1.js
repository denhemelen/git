function playGame(attempts) {
    // Генеруємо випадкове число від 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Комп'ютер загадав число. Спробуй вгадати!");

    let remainingAttempts = attempts;

    while (remainingAttempts > 0) {
        const userInput = prompt(`Введіть число від 1 до 100. Залишилось спроб: ${remainingAttempts}`);
        
        // Перевіряємо введені дані
        if (!validate(userInput)) {
            console.log("Будь ласка, введіть дійсне число.");
            continue;
        }

        const userGuess = parseInt(userInput, 10);

        // Анонімна функція для порівняння чисел
        const compare = (guess, secret) => {
            if (guess === secret) {
                return 0;
            } else if (guess > secret) {
                return 1;
            } else {
                return -1;
            }
        };

        const result = compare(userGuess, randomNumber);

        if (result === 0) {
            console.log(`Вітаємо! Ви вгадали число ${randomNumber} за ${attempts - remainingAttempts + 1} спроб!`);
            return;
        } else if (result === 1) {
            console.log("Спробуй менше.");
        } else {
            console.log("Спробуй більше.");
        }

        remainingAttempts--;
    }

    console.log(`На жаль, ви програли. Загадане число було ${randomNumber}.`);
}

// Функція для перевірки вхідних даних
function validate(inputParam) {
    const number = parseInt(inputParam, 10);
    return !isNaN(number) && number >= 1 && number <= 100;
}

// Запуск гри
playGame(7);
