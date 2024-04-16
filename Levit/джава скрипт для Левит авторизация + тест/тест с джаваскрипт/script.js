document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Здесь можно добавить логику проверки имени пользователя и пароля
    document.getElementById('authForm').style.display = 'none';
    document.getElementById('testForm').style.display = 'block';
});

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Пример проверки ответов
    let correctAnswers = 0;
    if (document.getElementById('q1-b').checked) correctAnswers++;
    if (document.getElementById('q2').value === 'b') correctAnswers++;
    if (document.getElementById('q3-c').checked && document.getElementById('q3-d').checked && document.getElementById('q3-e').checked && document.getElementById('q3-f').checked && document.getElementById('q3-g').checked && document.getElementById('q3-h').checked) correctAnswers++;

    document.getElementById('resultText').value = `Вы ответили правильно на ${correctAnswers} из 3 вопросов.`;
});
