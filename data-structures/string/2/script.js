function checkSpam(str) {
    str = str.toLowerCase();
    if (str.indexOf('viagra') != -1 || str.indexOf('xxx') != -1) {
        return true;
    }
        return false;

}


var str = prompt('Введите строку', '');
alert(checkSpam(str));
