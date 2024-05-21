document.addEventListener('DOMContentLoaded', function() {
    const sumButton = document.getElementById('sumButton');
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const result = document.getElementById('result');

    sumButton.addEventListener('click', function() {
        let sum = Number(num1.value) + Number(num2.value);
        result.value = sum;
    });
});
