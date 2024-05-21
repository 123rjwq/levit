// Запрашиваем цвет у пользователя
var colorInput = prompt("Введите цвет (название или 16-тиричное значение):");

// Проверяем, был ли введен цвет
if (colorInput!== null) {
    // Преобразуем 16-тиричное значение в RGB, если оно было введено
    var rgbColor = "";
    if (/^#[0-9A-F]{6}$/i.test(colorInput)) {
        rgbColor = "rgb(" + parseInt(colorInput.substr(1, 2), 16) + "," + parseInt(colorInput.substr(3, 2), 16) + "," + parseInt(colorInput.substr(5, 2), 16) + ")";
    } else {
        rgbColor = colorInput;
    }

    // Изменяем цвет текста на выбранный пользователем
    document.getElementById("textParagraph").style.color = rgbColor;

    // Выводим текст в выбранном пользователем цвете
    document.getElementById("textParagraph").textContent = "Текст цвета " + colorInput + ".";
} else {
    alert("Цвет не был введен.");
}
