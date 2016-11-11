function sumArgs() {
    return [].reduce.call(arguments, function (a,b) {
        return a+b;
    });
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива