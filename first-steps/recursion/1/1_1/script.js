function sumTo(n) {
    var result = n;
    for (var i = 1; i < n; i++) {
        result += i;
    }
    return result;
}


alert(sumTo(9));
