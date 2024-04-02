document.getElementById('name').addEventListener('focus', function() {
    if (this.value === this.placeholder) {
        this.value = '';
    }
});

document.getElementById('name').addEventListener('blur', function() {
    if (this.value === '') {
        this.value = this.placeholder;
    }
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    const inputs = this.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.validity.valid) {
            input.classList.remove('is-invalid');
        } else {
            input.classList.add('is-invalid');
            isValid = false;
        }
    });

    if (!isValid) {
        alert('Пожалуйста, исправьте ошибки в форме.');
    } else {
        alert('Форма успешно отправлена!');
        // Здесь можно добавить код для отправки формы на сервер
    }
});
