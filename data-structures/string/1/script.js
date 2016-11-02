function ucFirst(str) {
    var new_str = str[0].toUpperCase();
    var res = new_str;
    for (var i=1; i < str.length-1; i++)
        res =+ str[i];
    return res;
}


var str = prompt('Введите слово с маленькой буквы', '');
alert(ucFirst(str));
