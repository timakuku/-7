document.querySelector('#submitButton').addEventListener('click', function() {
    const userName = document.querySelector('#nameInput').value;
    const userAge = Number(document.querySelector('#ageInput').value);

    if (userName) {
        document.querySelector('#greetingMessage').textContent = 'Привет, ' + userName + '!';
        
        if (userAge < 18) {
            document.querySelector('#greetingMessage').textContent += ' Вы слишком молоды.';
        } else if (userAge >= 18 && userAge <= 65) {
            document.querySelector('#greetingMessage').textContent += ' Добро пожаловать.';
        } else {
            document.querySelector('#greetingMessage').textContent += ' Пора на пенсию.';
        }
    } else {
        document.querySelector('#greetingMessage').textContent = 'Пожалуйста, введите имя';
    }
});

function calculate(operator) {
    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Ошибка: деление на ноль';
            }
            break;
        default:
            result = 'Неверная операция';
    }

    document.querySelector('#calcResult').textContent = 'Результат: ' + result;
}

function displayDate() {
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;
    document.querySelector('#currentDate').textContent = 'Сегодня: ' + formattedDate;
}
displayDate(); 

document.querySelector('#factorialButton').addEventListener('click', function() {
    const num = Number(document.querySelector('#factorialInput').value);
    let factorial = 1;

    if (num < 0) {
        document.querySelector('#factorialResult').textContent = 'Факториал не определен для отрицательных чисел';
        return;
    }

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.querySelector('#factorialResult').textContent = 'Факториал ' + num + ' равен ' + factorial;
});
