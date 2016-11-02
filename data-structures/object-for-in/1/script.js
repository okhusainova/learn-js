function isEmpty(obj) {
    var count=0;
    for (var key in obj) {
        count++;
    }
    if (count != 0) {
        return false;
    } else {
        return true;
    }
}


var obj = {};
alert(isEmpty(obj));
