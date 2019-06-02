// Складывает числа в полях "Первое число" и "Второе число", вызывает всплывающее окно с результатом

const popupWindow = document.getElementById('popup');

const addition = function () {

		const firstNumber = Number(document.getElementById('firstnumber').value);
		const secondNumber = Number(document.getElementById('secondnumber').value);

		const result = document.getElementById('resultofaddition');
		const resultText = document.getElementById('resulttext');

		// Сложение проводится с проверкой на "0.1 + 0.2"
		let sum = (firstNumber * 10 + secondNumber * 10) / 10;

		if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(sum)) {
			result.innerHTML = '';
			resultText.innerHTML = 'Допустимо вводить только числа';
		}

		else {
			if(sum.toString().length >= 18) {
				result.innerHTML = (Math.round(sum * 1000)/1000).toString();
				resultText.innerHTML = 'Результат (с округлением):';
			}

			else {
				result.innerHTML = sum.toString();
				resultText.innerHTML = 'Результат:';
			}
		}

		popupWindow.style.display = 'block';
}