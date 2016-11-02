var arr = [5, 4, 3, 8, 0];


var clone = [];
for (var key in arr) {
    clone[key] = arr[key];
}

var filtered = filterRange(clone, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился
alert(filtered);

function filterRange(arr, a, b) {
}
