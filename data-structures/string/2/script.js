function checkSpam(str) {
    if (str.indexOf('viagra') || str.indexOf('xxx')) {
        return true;
    } else {
        return false;
    }

}


var str = prompt('Введите строку', '');
alert(checkSpam(str));
