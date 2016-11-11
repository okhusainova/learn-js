function applyAll(func) {
    var elements = [];
    for (var i = 1; i < arguments.length; i++) {
         elements.push(arguments[i]);
    }
    return func.apply(null, elements);
}

alert( applyAll(Math.min, 2, -2, 3) ); // -2
