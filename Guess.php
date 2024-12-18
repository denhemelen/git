<?php
// Функція для перевірки введених даних
function validate($inputParam) {
    if (!is_numeric($inputParam) || $inputParam < 1 || $inputParam > 100) {
        return false;
    }
    return true;
}

// Основна функція гри
function playGame($maxAttempts) {
    $numberToGuess = rand(1, 100); // Генеруємо випадкове число
    $attempts = 0;

    echo "Вітаю у грі 'Guess a Number'!\n";
    echo "Спробуй вгадати число від 1 до 100. У тебе є $maxAttempts спроб.\n";

    // Анонімна функція для порівняння введеного числа
    $compare = function ($userInput) use ($numberToGuess) {
        if ($userInput > $numberToGuess) {
            return "Спробуй менше.";
        } elseif ($userInput < $numberToGuess) {
            return "Спробуй більше.";
        }
        return "correct";
    };

    // Цикл спроб
    while ($attempts < $maxAttempts) {
        $attempts++;
        echo "Спроба #$attempts: Введи число: ";
        $input = trim(fgets(STDIN)); // Зчитування введення користувача

        // Перевірка даних
        if (!validate($input)) {
            echo "Некоректне введення. Введіть число від 1 до 100.\n";
            $attempts--;
            continue;
        }

        // Порівняння числа
        $result = $compare($input);

        if ($result === "correct") {
            echo "Вітаю! Ти вгадав число $numberToGuess за $attempts спроб(и)!\n";
            return;
        } else {
            echo "$result\n";
        }
    }

    // Якщо гравець не вгадав
    echo "На жаль, ти не вгадав число. Загадане число було: $numberToGuess\n";
}

// Запуск гри з 7 спробами
playGame(7);
