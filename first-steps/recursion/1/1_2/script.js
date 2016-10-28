function sumTo(n) {
    if (n != 1) {
        return n + sumTo(n-1);
    } else {
        return n;
    }
}

alert(sumTo(9));
