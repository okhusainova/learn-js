function truncate(str, maxlength) {
    var new_str = str;
    if (str.length > maxlength) {

        var new_str='';
        for (var i=0; i < maxlength-3; i++) {
            new_str += str[i];
        }
        new_str = new_str + '...';
    }
    return new_str;
}

alert(truncate('привет. меня зовут Патрик', 6));