// Проведение сложения чисел в полях "Первое число" и "Второе число" 
function addition() {
		// Поиск и преобразование строк в числа
		var a = parseFloat(document.getElementById('a').value);
		var b = parseFloat(document.getElementById('b').value);
		// Расчет и проверка результата
		if (isNaN(a + b)){
		document.getElementById("result").innerHTML = "Пожалуйста, введите цифры."}
		else {document.getElementById("result").innerHTML = (a + b).toFixed(1)}
		document.getElementById("popup").style.display = "block";
}