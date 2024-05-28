// Выбор всех изображений слайдера по классу 'slider-img'
const images = document.querySelectorAll('.slider-img');
// Выбор всех элементов управления слайдером по классу 'controlls'
const controlls = document.querySelectorAll('.controlls');
// Переменная для отслеживания текущего индекса активного изображения
let imageIndex = 0;

// Функция для показа определенного изображения
function show(index) {
    // Удаление класса 'active' у текущего активного изображения
    images[imageIndex].classList.remove('active');
    // Добавление класса 'active' к выбранному изображению
    images[index].classList.add('active');
    // Обновление переменной imageIndex текущим индексом активного изображения
    imageIndex = index;
}

// Добавление обработчика событий клика для каждого элемента управления
controlls.forEach((control) => {
    control.addEventListener('click', function(event) {
        // Проверка, является ли цель события элементом управления 'prev'
        if (event.target.classList.contains('prev')) {
            // Расчет нового индекса для предыдущего изображения
            let newIndex = imageIndex - 1;
            // Если индекс выходит за пределы массива, устанавливаем его в последний индекс
            if (newIndex < 0) {
                newIndex = images.length - 1;
            }
            // Показываем новое изображение
            show(newIndex);
        } 
        // Проверка, является ли цель события элементом управления 'next'
        else if (event.target.classList.contains('next')) {
            // Расчет нового индекса для следующего изображения
            let newIndex = imageIndex + 1;
            // Если индекс выходит за пределы массива, устанавливаем его в начальный индекс
            if (newIndex >= images.length) {
                newIndex = 0;
            }
            // Показываем новое изображение
            show(newIndex);
        }
    });
});

// Инициализация слайдера, показывая первое изображение
show(imageIndex);
