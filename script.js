const birthdayInput = document.getElementById('birthday');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');
const errorElement = document.getElementById('error');

function calculateDaysUntilBirthday() {
    const birthdayValue = birthdayInput.value;

    if (birthdayValue === '') {
        errorElement.style.display = 'block';
        resultElement.textContent = '';
        return;
    }

    errorElement.style.display = 'none';

    const today = new Date();
    const birthdayDate = new Date(birthdayValue);
    birthdayDate.setFullYear(today.getFullYear());

    if (birthdayDate < today) {
        birthdayDate.setFullYear(today.getFullYear() + 1);
    }

    const timeDiff = birthdayDate.getTime() - today.getTime();
    const daysUntilBirthday = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    let dayWord = 'дней';
    if (daysUntilBirthday === 1) {
        dayWord = 'день';
    } else if (daysUntilBirthday >= 2 && daysUntilBirthday <= 4) {
        dayWord = 'дня';
    }

    resultElement.textContent = `До вашего дня рождения осталось ${daysUntilBirthday} ${dayWord}.`;
}

calculateButton.addEventListener('click', calculateDaysUntilBirthday);

birthdayInput.addEventListener('input', function () {
    if (birthdayInput.value !== '') {
        errorElement.style.display = 'none';
    }
});
