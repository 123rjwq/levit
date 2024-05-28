document.getElementById('lightButton').addEventListener('click', function() {
    document.getElementById('lightImage').src = "light-on.png"; // Предполагается, что у вас есть соответствующие изображения
});

document.getElementById('alarmButton').addEventListener('click', function() {
    document.getElementById('alarmImage').src = "alarm-on.png"; // Аналогично, предполагается наличие соответствующих изображений
});
