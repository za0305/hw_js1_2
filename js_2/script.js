var arr = []
for (var i = 0; i < 5; i++) {
	arr [i]=prompt ('Введите ' + (i+1) + ' имя', '')
};

var flag
var user = prompt('Введите имя пользователя', '')
	for (var j = 0; j < arr.length; j++) {
		if (arr[j]==user) {
		flag = true;
		}

	};
	if (flag==true) {
	alert (user + ' ,вы успешно вошли');
	} else {
		alert('Ошибка, неверное имя пользователя');
	};
