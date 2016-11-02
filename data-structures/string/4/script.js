function extractCurrencyValue(str) {
    var res='';
    for (var i = 1; i < str.length; i++) {
        res += str[i];
    }
    return res;
}


var str = prompt('Введите цену', '');
alert(extractCurrencyValue(str));
