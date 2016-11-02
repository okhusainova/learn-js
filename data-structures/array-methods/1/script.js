'use strict'
var obj = {
    className: 'open menu'
}

addClass(obj, 'new');


function addClass(obj, cls) {
    var new_obj = obj.className.split(' ');
    for (var i=0; i<new_obj.length-1; i++) {
        if (cls === new_obj[i]) {
            alert('Такой элемент уже есть в массиве');
        } else {
            var second_obj = new_obj.join(' ');
            new_obj.push(cls);
            alert(second_obj);
        }
    }
}


