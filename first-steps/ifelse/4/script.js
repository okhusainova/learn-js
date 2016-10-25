var who = prompt('Подскажи мне свой логин', '');
if (who == 'Админ') {
    var password = prompt('Подскажи мне свой пароль', '');
    if (password == 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    }
    else if (password == null) {
        alert('Вход отменён');
    }
    else {
        alert('Пароль неверен');
    }
}
else if (who == null) {
    alert('Вход отменён');
}
else {
    alert('Я вас не знаю');
}

