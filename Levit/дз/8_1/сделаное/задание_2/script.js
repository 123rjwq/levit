function getTimeOfDayColor() {
    const now = new Date();
    const hours = now.getHours();

    if ((hours >= 6 && hours < 12) || (hours >= 18 && hours < 22)) {
        return 'red'; // Утро или вечер
    } else if (hours >= 12 && hours < 18) {
        return 'yellow'; // День
    } else {
        return 'blue'; // Ночь
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.getElementById('convertButton');
    const myText = document.getElementById('myText');
    const welcomeMessage = document.getElementById('welcomeMessage');
	const welcomeMessage_v2 = document.getElementById('welcomeMessage_v2'); // Получаем элемент для приветственного сообщения v2


    // Устанавливаем стиль для приветственного сообщения в зависимости от времени суток
    welcomeMessage.style.color = getTimeOfDayColor();

    // Добавляем текст приветствия
    welcomeMessage.textContent = 'Добро пожаловать';
	
	// Устанавливаем стиль для приветственного сообщения
    welcomeMessage_v2.style.color = 'green';

    // Добавляем текст приветствия
    welcomeMessage_v2.textContent = 'Добро пожаловать';

    convertButton.addEventListener('click', function() {
        let text = myText.value;
        let convertedText = text.toUpperCase(); // Преобразование текста в прописные буквы
        myText.value = convertedText; // Обновление значения поля ввода
    });
});
