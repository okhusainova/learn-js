'use strict'
var obj = {
    className: 'open menu'
}

addClass(obj, 'menu');


function addClass(obj, cls) {
    var new_obj = obj.className.split(' ');
    for (var i = 0; i < new_obj.length; i++) {
        if (cls === new_obj[i]) {
            delete new_obj[i];
        } else {
            alert('Такого класса нет');
        }
    }
    var result = new_obj.join();
    alert(result);
}


