const gameArea = document.getElementById('gameArea');
const messageElement = document.getElementById('message');

let snake = [{ top: 50, left: 50 }];
let direction = { x: 0, y: -1 };
let food = { top: Math.floor(Math.random() * 10) + 1, left: Math.floor(Math.random() * 10) + 1 };

function drawSnake() {
    const head = document.createElement('div');
    head.className = 'snake head';
    head.style.top = `${snake[0].top}px`;
    head.style.left = `${snake[0].left}px`;
    gameArea.appendChild(head);

    for (let i = 1; i < snake.length; i++) {
        const bodyPart = document.createElement('div');
        bodyPart.className = 'snake body';
        bodyPart.style.top = `${snake[i].top}px`;
        bodyPart.style.left = `${snake[i].left}px`;
        gameArea.appendChild(bodyPart);
    }
}

function updateSnake() {
    const newHead = {...snake[0] };
    newHead.top += direction.y;
    newHead.left += direction.x;

    if (newHead.top === food.top && newHead.left === food.left) {
        // Обработка еды
        snake.push(newHead);
        food = { top: Math.floor(Math.random() * 10) + 1, left: Math.floor(Math.random() * 10) + 1 };
    } else {
        snake.pop();
        snake.unshift(newHead);
    }

    // Изменение изображения головы в зависимости от направления
    if (direction.y === -1) {
        head.style.backgroundImage = "url('background.png')";
    } else if (direction.y === 1) {
        head.style.backgroundImage = "url('background.png')";
    } else if (direction.x === 1) {
        head.style.backgroundImage = "url('background.png')";
    } else {
        head.style.backgroundImage = "url('background.png')";
    }

    // Проверка столкновения с границами или самим собой
    if (newHead.top < 0 || newHead.top >= 10 || newHead.left < 0 || newHead.left >= 10 || snake.some(part => part.top === newHead.top && part.left === newHead.left)) {
        messageElement.textContent = "Вы проиграли!";
        clearInterval(gameInterval);
    }
}

function moveSnake() {
    updateSnake();
    drawSnake();
}

// Начало игры
drawSnake();
setInterval(moveSnake, 1000); // Увеличьте время между кадрами для более плавного движения
