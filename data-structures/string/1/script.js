function ucFirst(str) {
    var res = str.charAt(0).toUpperCase();
    for (var i=1; i < str.length-1; i++)
        res += str[i];
    return res;
}


var str = prompt('Введите слово с маленькой буквы', '');
alert(ucFirst(str));
