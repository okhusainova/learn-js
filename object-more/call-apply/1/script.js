function sumArgs() {
    var join = [].join;
    var elements = join.call(arguments, ', ');
    return elements.reduce(function (a,b) {
        return a+b;
    });
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива