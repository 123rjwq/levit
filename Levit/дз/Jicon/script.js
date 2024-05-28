// Добавляем слушатель событий к форме
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

	// Получаем значения из полей ввода
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Регулярные выражения для проверки
    const nameRegex = /^[А-ЯЁа-яё\s]+$/; // Проверка имени
    const emailRegex = /^\S+@\S+\.\S+$/; // Проверка email
    const messageRegex = /.+/; // Проверка сообщения на наличие хотя бы одного символа

    let isValid = true;// Переменная для отслеживания валидности данных

	 // Проверяем каждое поле на соответствие регулярному выражению
    if (!nameRegex.test(name.value)) {
        alert('Введите корректное имя');
        isValid = false;
    }

    if (!emailRegex.test(email.value)) {
        alert('Введите корректный email');
        isValid = false;
    }

    if (!messageRegex.test(message.value)) {
        alert('Введите сообщение');
        isValid = false;
    }

	// Если все поля прошли проверку, сохраняем данные в localStorage
    if (isValid) {
        // Сохраняем данные в localStorage
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('message', message.value);

        alert('Данные успешно отправлены!');
    }
});

// При загрузке страницы проверяем localStorage и заполняем поля
window.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');

	// Получаем сохраненные данные из localStorage
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedMessage = localStorage.getItem('message');

	// Если данные найдены, заполняем поля
    if (storedName && storedEmail && storedMessage) {
        nameInput.value = storedName;
        emailInput.value = storedEmail;
        messageTextarea.value = storedMessage;
    }
});
