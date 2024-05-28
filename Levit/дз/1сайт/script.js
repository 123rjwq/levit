// Функция для сохранения данных формы в localStorage
function saveFormData() {
    var formData = {
        surname: document.getElementById('surname').value,
        name: document.getElementById('name').value,
        patronymic: document.getElementById('patronymic').value,
        phone: document.getElementById('phone').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value, // Изменено на email
        explanation: document.getElementById('explanation').value
    };
    localStorage.setItem('formData', JSON.stringify(formData));
}

function formatPhone(inputField) {
    var value = inputField.value.replace(/\D/g, '').substring(0, 15); // Удаляем все символы, кроме цифр, и ограничиваем длину до 15 символов
    var formattedValue = '';

    if (value.length >= 3) { // Если введено 3 или более цифр
        formattedValue += '(' + value.slice(0, 3) + ') '; // Добавляем скобки вокруг первых трех цифр
    }

    if (value.length >= 6) { // Если введено 6 или более цифр
        formattedValue += value.slice(3, 6) + '-'; // Добавляем тире после третьих цифр
    }

    if (value.length >= 9) { // Если введено 9 или более цифр
        formattedValue += value.slice(6, 9) + '-'; // Добавляем еще тире после седьмой цифры
    }

    if (value.length >= 12) { // Если введено 12 или более цифр
        formattedValue += value.slice(9, 12) + '-'; // Добавляем последний тире после десятой цифры
    }

    inputField.value = formattedValue.trim(); // Убираем лишние пробелы в конце
}



// Функция для восстановления данных при загрузке страницы
window.onload = function() {
    var savedData = localStorage.getItem('formData');
    if (savedData) {
        var formData = JSON.parse(savedData);
        document.getElementById('surname').value = formData.surname;
        document.getElementById('name').value = formData.name;
        document.getElementById('patronymic').value = formData.patronymic;
        document.getElementById('phone').value = formData.phone;
        document.getElementById('age').value = formData.age;
        document.getElementById('email').value = formData.email; // Изменено на email
        document.getElementById('explanation').value = formData.explanation;
    }
};
