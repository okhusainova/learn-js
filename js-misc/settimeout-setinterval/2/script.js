function f(x) {
    alert(x);
}

function delay(func, ms) {
    return setTimeout(func, ms);
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000('тест');
f1500('тест2');