// Функция для обновления времени
function updateClock() {
	var now = new Date();
	var dname = now.getDay(),
	mo = now.getMonth(),
	dnum = now.getDate(),
	yr = now.getFullYear(),
	hou = now.getHours(),
	min = now.getMinutes(),
	sec = now.getSeconds(),
	pe = "AM";
	
	if (hou == 0)
	{
		hou = 12;
	}
	
	if (hou > 12)
	{
		hou = hou - 12;
		pe = "PM";
	}	

	Number.prototype.pad = function(digits)
	{
		for(var n = this.toString(); n.length < digits; n= 0 + n);
		return n;
	}
	
	var week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
	var ids = ["dayname","month","daynum","year","hour","minutes","seconds","period"];
	var values = [week[dname], months[mo], dnum.pad(2), yr.pad(2), hou.pad(2), min.pad(2), sec.pad(2), pe];
	
	for (var i = 0; i < ids.length; i++)
		document.getElementById(ids[i]).firstChild.nodeValue = values[i];
	
}

function initClock(){
	updateClock();
	window.setInterval("updateClock()",1);
}

// Функция для показа панели времени
function showDateTimePanel() {
	var datetimePanel = document.getElementById('datetimePanel');
    var showTimeButton = document.getElementById('showTimeButton');
    var no_showTimeButton = document.getElementById('no_showTimeButton');
	
	datetimePanel.style.display = "block";
    showTimeButton.style.display = "none"; // Скрываем кнопк
	no_showTimeButton.style.display = "block"; // Скрываем кнопк
}
// Функция не для показа панели времени
function no_showDateTimePanel() {
	var datetimePanel = document.getElementById('datetimePanel');
    var showTimeButton = document.getElementById('showTimeButton');
    var no_showTimeButton = document.getElementById('no_showTimeButton');
	
	datetimePanel.style.display = "none";
    showTimeButton.style.display = "block"; // Скрываем кнопк
	no_showTimeButton.style.display = "none"; // Скрываем кнопк
}
