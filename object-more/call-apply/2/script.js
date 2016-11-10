function applyAll(func) {
    var join = [].join;
    for (var i = 1; i < arguments.length; i++) {
        var elements = join.call(arguments, ', ');
    }
    return func.apply(elements);
}

alert( applyAll(Math.min, 2, -2, 3) ); // -2
