// 1. Кнопка "Сказати Привіт"
document.querySelector('.hello-button').addEventListener('click', () => {
    alert('Hello World!');
});

// 2. Привітання з ім'ям
document.querySelector('.greet-button').addEventListener('click', () => {
    let name = document.querySelector('.name-input').value.trim();
    alert(name ? `Привіт, ${name}!` : 'Привіт!');
});

// 3. Зміна кольору фону
document.querySelector('.color-button').addEventListener('click', () => {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});

// 4. Показати/Приховати текст
let contentBox = document.querySelector('.content-box');
document.querySelector('.toggle-button').addEventListener('click', () => {
    contentBox.classList.toggle('hidden');
});

// 5. Привітання при завантаженні сторінки
window.addEventListener('load', () => {
    let name = prompt('Як вас звати?');
    if (name) alert(`Ласкаво просимо, ${name}!`);
});

// 6. Збільшення/Зменшення шрифту
let textContent = document.querySelector('.text-content');
document.querySelector('.increase-font').addEventListener('click', () => {
    let currentSize = parseFloat(window.getComputedStyle(textContent).fontSize);
    textContent.style.fontSize = `${currentSize + 2}px`;
});
document.querySelector('.decrease-font').addEventListener('click', () => {
    let currentSize = parseFloat(window.getComputedStyle(textContent).fontSize);
    textContent.style.fontSize = `${currentSize - 2}px`;
});

// 7. Надсилання форми
document.querySelector('.submit-form').addEventListener('click', () => {
    let firstName = document.querySelector('.first-name').value.trim();
    let lastName = document.querySelector('.last-name').value.trim();
    let email = document.querySelector('.email-input').value.trim();
    alert(`Ім'я: ${firstName} ${lastName}\nЕлектронна пошта: ${email}`);
});

// 8. Малювання на канвасі
let canvas = document.querySelector('.drawing-canvas');
let ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => (drawing = true));
canvas.addEventListener('mouseup', () => (drawing = false));
canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.fillRect(e.offsetX, e.offsetY, 2, 2);
    }
});

// 9. Гра "Натисни правильну клавішу"
let keys = ['а', 'с', 'д', 'ф', 'г', 'х', 'ж', 'к', 'л', 'п'];
let currentKeyIndex = 0;
let gameActive = false;

function updateGameMessage() {
    document.querySelector('.current-key').textContent = gameActive
        ? `Натисніть "${keys[currentKeyIndex]}"`
        : 'Натисніть "Почати гру", щоб розпочати';
}

document.querySelector('.new-game').addEventListener('click', () => {
    gameActive = true;
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    updateGameMessage();
});

document.addEventListener('keydown', (e) => {
    if (!gameActive) return;

    if (e.key === keys[currentKeyIndex]) {
        alert('Правильно!');
        currentKeyIndex = Math.floor(Math.random() * keys.length);
        updateGameMessage();
    } else {
        alert('Неправильно. Спробуйте ще раз!');
    }
});

updateGameMessage();
