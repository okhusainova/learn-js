var head = {
    glasses: 1
};

var table = {
    pen: 3,
    __proto__: head
};

var bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

var pockets = {
    money: 2000,
    __proto__: bed
};
//
// alert(pockets.pen);
// alert(bed.glasses);
// alert(table.money);

var a = Date.now();
alert(pockets.glasses);
var b = Date.now();
alert('In pockets.glasses ' + (b-a));
var c = Date.now();
alert(head.glasses);
var d = Date.now();
alert('In head.glasses ' + (d-c));