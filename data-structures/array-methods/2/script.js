function camelize(str) {
    var new_str = str.split('-');
    var new_str2 = [];
    for (var i = 1; i < new_str.length; i++) {
        new_str2 += new_str[i][0].toUpperCase() + new_str[i].slice(1);
    }
    alert(new_str2);
    var res = new_str[0] + new_str2;
    return res;
}

alert(camelize('bere-dsd-ere'));