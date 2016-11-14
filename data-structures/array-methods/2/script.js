function camelize(str) {
    for (var i=0; i < str.length; i++) {
        if (str[i] == '-') {
            str[i+1].toUpperCase();
            alert('Замена произошла!')
            //delete str[i];
        }
    }
    return str;
}


alert(camelize('bere-dsd'));